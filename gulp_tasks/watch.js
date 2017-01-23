var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('watch', function () {
  var watcher1 = gulp.watch(['index.html'], ['html']);
  watcher1.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });
  var watcher2 = gulp.watch(['src/css/*.css'], ['styles']);
  watcher2.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });
  var watcher3 = gulp.watch(['../src/js/**/*.js'], ['scripts']);
  watcher3.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });
});