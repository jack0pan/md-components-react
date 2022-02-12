/* eslint-disable tsdoc/syntax */
const gulp = require("gulp");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("gulp-cssnano");
const through2 = require("through2");
const ts = require("gulp-typescript");
const rimraf = require("rimraf");
const rename = require("gulp-rename");
const rollup = require("rollup");
const rollupCommonjs = require("@rollup/plugin-commonjs");
const rollupTS = require("@rollup/plugin-typescript");
const { nodeResolve: rollupNodeResolve } = require("@rollup/plugin-node-resolve");
const { terser: rollupTerser } = require("rollup-plugin-terser");
const postcss = require("gulp-postcss");

const DIST_PATH = "dist";

const paths = {
  dest: {
    lib: "lib",
    esm: "es",
  },
  babelScripts: ["src/**/*.{ts,tsx}", "!src/**/{demos,__test__}/*.{ts,tsx}"],
  tsScripts: ["src/**/*.{ts,tsx}", "!src/**/{demos,style,__test__}/*.{ts,tsx}"],
};
const babelConfig = {
  env: {
    esm: {
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          "@babel/plugin-transform-runtime",
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
  plugins: ["@babel/plugin-transform-runtime"],
  presets: ["@babel/preset-env", "@babel/typescript", "@babel/react"],
};
const tsConfig = {
  esModuleInterop: true,
  skipLibCheck: true,
  declaration: true,
  emitDeclarationOnly: true,
  jsx: "react",
};

function clean(done) {
  rimraf.sync(DIST_PATH);
  rimraf.sync(paths.dest.lib);
  rimraf.sync(paths.dest.esm);
  done(0);
}

function bundleCss() {
  return gulp
    .src("src/index.css")
    .pipe(postcss())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(sourcemaps.init())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(DIST_PATH));
}

async function compileUMD() {
  const bundle = await rollup.rollup({
    input: "./src/index.ts",
    plugins: [rollupCommonjs(), rollupNodeResolve(), rollupTS()],
  });

  const umdOutputConfig = {
    format: "umd",
    globals: { react: "React" },
    name: "md-components-react",
    sourcemap: true,
  };
  await bundle.write({
    ...umdOutputConfig,
    file: `./${DIST_PATH}/index.js`,
  });
  await bundle.write({
    ...umdOutputConfig,
    plugins: [rollupTerser()],
    file: `./${DIST_PATH}/index.min.js`,
  });
}

/**
 * inject css importing.
 *
 * example:
 * ```
 * import './index.scss' => import './index.css'
 * import '../test-comp/style' => import '../test-comp/style/css.js'
 * import '../test-comp/style/index.js' => import '../test-comp/style/css.js'
 * ```
 *
 * @param {string} content
 */
function cssInjection(content) {
  return content
    .replace(/\/style\/?'/g, "/style/css'")
    .replace(/\/style\/?"/g, '/style/css"')
    .replace(/\.scss/g, ".css");
}

/**
 * compile ts file to cjs or esm
 *
 * @param {string} babelEnv babel environment var
 * @param {string} destDir dest directory
 */
function compileScripts(babelEnv, destDir) {
  const { babelScripts } = paths;
  process.env.BABEL_ENV = babelEnv;
  return gulp
    .src(babelScripts)
    .pipe(sourcemaps.init())
    .pipe(babel(babelConfig))
    .pipe(
      through2.obj(function z(file, encoding, next) {
        this.push(file.clone());
        if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
          const content = file.contents.toString(encoding);
          file.contents = Buffer.from(cssInjection(content));
          file.path = file.path.replace(/index\.js/, "css.js");
          this.push(file);
          next();
        } else {
          next();
        }
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(destDir));
}

function compileTypes() {
  const { dest, tsScripts } = paths;
  return gulp.src(tsScripts).pipe(ts(tsConfig)).pipe(gulp.dest(dest.lib)).pipe(gulp.dest(dest.esm));
}

function compileCJS() {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
}

function compileESM() {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
}

exports.default = gulp.series(
  clean,
  gulp.parallel(bundleCss, gulp.series(compileCJS, compileESM), compileTypes, compileUMD)
);
