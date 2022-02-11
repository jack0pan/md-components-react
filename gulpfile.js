/* eslint-disable tsdoc/syntax */
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');
const ts = require('gulp-typescript');
const rimraf = require('rimraf');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const combine = require('gulp-scss-combine');
const rollup = require('rollup');
const rollupCommonjs = require('@rollup/plugin-commonjs');
const rollupTS = require('@rollup/plugin-typescript');
const { nodeResolve: rollupNodeResolve } = require('@rollup/plugin-node-resolve');
const { terser: rollupTerser } = require('rollup-plugin-terser');

const paths = {
  dest: {
    lib: 'lib',
    esm: 'es',
    dist: 'dist',
  },
  styles: ['src/**/*.scss', '!src/**/demos/*'],
  babelScripts: ['src/**/*.{ts,tsx}', '!src/**/{demos,__test__}/*.{ts,tsx}'],
  tsScripts: ['src/**/*.{ts,tsx}', '!src/**/{demos,style,__test__}/*.{ts,tsx}'],
};
const babelConfig = {
  env: {
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
  },
  plugins: ['@babel/plugin-transform-runtime'],
  presets: ['@babel/preset-env', '@babel/typescript', '@babel/react'],
};
const tsConfig = {
  esModuleInterop: true,
  skipLibCheck: true,
  declaration: true,
  emitDeclarationOnly: true,
  jsx: 'react',
};

async function compileUMD() {
  const bundle = await rollup.rollup({
    input: './src/index.ts',
    plugins: [rollupCommonjs(), rollupNodeResolve(), rollupTS()],
  });

  const umdOutputConfig = {
    format: 'umd',
    globals: { react: 'React' },
    name: 'md-components-react',
    sourcemap: true,
  };
  await bundle.write({
    ...umdOutputConfig,
    file: './dist/index.js',
  });
  await bundle.write({
    ...umdOutputConfig,
    plugins: [rollupTerser()],
    file: './dist/index.min.js',
  });
}

function clean(done) {
  rimraf.sync(paths.dest.dist);
  rimraf.sync(paths.dest.lib);
  rimraf.sync(paths.dest.esm);
  done(0);
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
    .replace(/\.scss/g, '.css');
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
          file.path = file.path.replace(/index\.js/, 'css.js');
          this.push(file);
          next();
        } else {
          next();
        }
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destDir));
}

function compileTypes() {
  const { dest, tsScripts } = paths;
  return gulp.src(tsScripts).pipe(ts(tsConfig)).pipe(gulp.dest(dest.lib)).pipe(gulp.dest(dest.esm));
}

function compileCJS() {
  const { dest } = paths;
  return compileScripts('cjs', dest.lib);
}

function compileESM() {
  const { dest } = paths;
  return compileScripts('esm', dest.esm);
}

function compileScss() {
  return gulp
    .src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm))
    .pipe(concat('index.css'))
    .pipe(gulp.dest(paths.dest.dist))
    .pipe(sourcemaps.init())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest.dist));
}

function copyScss() {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm))
    .pipe(combine())
    .pipe(concat('index.scss'))
    .pipe(gulp.dest(paths.dest.dist));
}

exports.default = gulp.series(
  clean,
  gulp.parallel(compileTypes, compileScss, gulp.series(compileCJS, compileESM), compileUMD, copyScss)
);
