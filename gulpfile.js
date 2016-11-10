var gulp   = require('gulp'),
  concat = require('gulp-concat'),
  sass   = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  gulp.src('styles/sass/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('styles/sass/*.scss', ['sass']);
  gulp.watch('styles/sass/**/*.scss', ['sass']);
});
