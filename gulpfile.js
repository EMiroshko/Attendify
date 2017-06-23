'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./scss/styles.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'sass', 'sass:watch' ]);

gulp.task('sass:watch', function () {
    gulp.watch('./**/**/*.scss', ['sass']);
});