'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var del = require('del');

gulp.task('uglify', function() {
  return gulp.src('responsivelyLazy.js')
    .pipe(uglify())
	.pipe(rename({
		suffix: '.min'
	}))
    .pipe(gulp.dest('./'));
});

gulp.task('minify-css', function() {
  return gulp.src('responsivelyLazy.css')
    .pipe(minifyCss())
	.pipe(rename({
		suffix: '.min'
	}))
    .pipe(gulp.dest('./'));
});

gulp.task('clean', () => del(['responsivelyLazy.min.css', 'responsivelyLazy.min.js'], {dot: true}));

gulp.task('default', ['clean'], cb =>
  runSequence(
    ['uglify', 'minify-css'],
    cb
  )
);