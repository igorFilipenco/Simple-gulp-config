var gulp = require('gulp'),
    watch = require('gulp-watch'),
    crayon = require('crayon-terminal');

gulp.task('watch', function () {
  var watcher1 = gulp.watch(['index.html'], ['html']);
  watcher1.on('change', function (event) {
    crayon("#79d779").log('Html file ' + event.type);
    crayon("#79d779").log('File location: ' + event.path);
  });
  var watcher2 = gulp.watch(['src/css/*.css'], ['styles']);
  watcher2.on('change', function (event) {
    crayon("#d4c56a").log('Library styles file ' + event.type);
    crayon("#d4c56a").log('File location: ' + event.path);
  });
  var watcher3 = gulp.watch(['src/css/*.scss'], ['sass']);
  watcher3.on('change', function (event) {
    crayon("#d4c56a").log('Project styles file ' + event.type);
    crayon("#d4c56a").log('File location: ' + event.path);
  });
  var watcher4 = gulp.watch(['src/js/**/*.js'], ['scripts']);
  watcher4.on('change', function (event) {
    crayon("#ed9eae").log('Script file ' + event.type);
    crayon("#ed9eae").log('File location: ' + event.path);
  });
});
