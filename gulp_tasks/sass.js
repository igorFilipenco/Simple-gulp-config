var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    connect = require('gulp-connect'),
    reload = require('connect-livereload');

gulp.task('sass', function(){
  gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./build/src/css'))
    .pipe(connect.reload())
});