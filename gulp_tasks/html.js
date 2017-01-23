var gulp = require('gulp'),
    connect = require('gulp-connect');
    reload = require('connect-livereload');

gulp.task('html', function(){
  return gulp.src('index.html')
    .on('error', console.log)
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload())
});