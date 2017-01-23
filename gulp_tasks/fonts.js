var gulp = require('gulp');

gulp.task('fonts', function() {
  gulp.src('node_modules/bootstrap/fonts/*{ttf,woff,woff2,svg,eot}')
      .pipe(gulp.dest('./build/src/fonts/'))
  gulp.src('./src/fonts/open_sans/*ttf')
      .pipe(gulp.dest('./build/src/fonts/open_sans'))
});