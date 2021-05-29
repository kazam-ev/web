const { series , src, dest} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minify = require('gulp-minify-css');
const del = require('del');

function jsminifyTask() {
  return src("./assets/js/*.js")
  .pipe(uglify())
  .pipe(rename({ extname: '.min.js' }))
  .pipe(dest('./assets/js/'));
}

function cssminifyTask() {
  return src("./assets/css/*.css")
  .pipe(minify())
  .pipe(rename({ extname: '.min.css' }))
  .pipe(dest('./assets/css/'));
}



function CleanTask() {
  return del([
    "./assets/css/*.min.css", "./assets/js/*.min.js"
  ])
}
  
exports.default = series(CleanTask, jsminifyTask, cssminifyTask)