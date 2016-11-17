var gulp   = require('gulp'),
  sass   = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  gulp.src('examples/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('styles/css'));
});

gulp.task('watch', ['sass'], function () {
  gulp.watch('examples/**/*.scss', ['sass']);
});
