const gulp = require('gulp');
const rimraf = require('rimraf');
const postcss = require('gulp-postcss');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const rollup = require('rollup');
const rollupCommonJs = require('@rollup/plugin-commonjs');
const rollupTS = require('@rollup/plugin-typescript');
const { nodeResolve: rollupNodeResolve } = require('@rollup/plugin-node-resolve');
const { terser: rollupTerser } = require('rollup-plugin-terser');

const UMD_OUTPUT_PATH = 'dist';
const CJS_OUTPUT_PATH = 'lib';
const ESM_OUTPUT_PATH = 'esm';
const TS_INTPUT_PATHS = ['src/**/*.{ts,tsx}', '!src/**/{demos,__test__}/*.{ts,tsx}'];

function clean(done) {
  rimraf.sync(UMD_OUTPUT_PATH);
  rimraf.sync(CJS_OUTPUT_PATH);
  rimraf.sync(ESM_OUTPUT_PATH);
  done(0);
}

function bundleCss() {
  return gulp
    .src('src/index.css')
    .pipe(postcss())
    .pipe(gulp.dest(UMD_OUTPUT_PATH))
    .pipe(sourcemaps.init())
    .pipe(cssnano({ zindex: false, reduceIdents: false }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(UMD_OUTPUT_PATH));
}

async function bundleTsToUmd() {
  const bundle = await rollup.rollup({
    input: './src/index.ts',
    plugins: [rollupCommonJs(), rollupNodeResolve(), rollupTS()],
  });

  const umdOutputConfig = {
    format: 'umd',
    globals: { react: 'React' },
    name: 'material-components',
    sourcemap: true,
  };
  await bundle.write({
    ...umdOutputConfig,
    file: `./${UMD_OUTPUT_PATH}/index.js`,
  });
  await bundle.write({
    ...umdOutputConfig,
    plugins: [rollupTerser()],
    file: `./${UMD_OUTPUT_PATH}/index.min.js`,
  });
}

function compileTsToTypes() {
  return gulp
    .src(TS_INTPUT_PATHS)
    .pipe(
      ts({
        esModuleInterop: true,
        skipLibCheck: true,
        declaration: true,
        emitDeclarationOnly: true,
        jsx: 'react',
      })
    )
    .pipe(gulp.dest(CJS_OUTPUT_PATH))
    .pipe(gulp.dest(ESM_OUTPUT_PATH));
}

function compileTsToCjs() {
  return gulp
    .src(TS_INTPUT_PATHS)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-runtime'],
        presets: ['@babel/preset-env', '@babel/typescript', '@babel/react'],
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(CJS_OUTPUT_PATH));
}

function compileTsToEsm() {
  return gulp
    .src(TS_INTPUT_PATHS)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        plugins: ['@babel/plugin-transform-runtime'],
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
          '@babel/typescript',
          '@babel/react',
        ],
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(ESM_OUTPUT_PATH));
}

exports.default = gulp.series(
  clean,
  gulp.parallel(bundleCss, bundleTsToUmd, compileTsToTypes, compileTsToCjs, compileTsToEsm)
);
