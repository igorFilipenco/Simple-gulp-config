var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server-start', function () {
  connect.server({
    name: 'Local Server started',
    root: './build',
    port: 3000,
    livereload: true
  });
});