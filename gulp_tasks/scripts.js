var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    reload = require('connect-livereload');

gulp.task('scripts', function(){
  return gulp.src(['src/js/*.js',
                   'node_modules/jquery/dist/jquery.min.js',
                   'node_modules/bootstrap/dist/js/bootstrap.min.js'])
        .on('error', console.log)
        .pipe(gulp.dest('./build/src/js'))
        .pipe(connect.reload())
});

