var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  gulp.src('./img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./build/img'))
});