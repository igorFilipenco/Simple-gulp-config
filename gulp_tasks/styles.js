var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect'),
    reload = require('connect-livereload');;

gulp.task('styles', function() {
   gulp.src('src/css/*.css')
      .on('error', console.log)
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest('./build/src/css'))
      .pipe(connect.reload())
   gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'])
      .on('error', console.log)
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(gulp.dest('./build/src/css'))
      .pipe(connect.reload())
});


