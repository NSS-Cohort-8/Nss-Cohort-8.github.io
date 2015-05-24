'use strict'

var gulp         = require('gulp'),
    del          = require('del'),
    sass         = require('gulp-sass'),
    jade         = require('gulp-jade');

gulp.task('clean', function () {
  del(['tmp', 'public']);
});

gulp.task('sass', function () {
  var autoprefixer = require('autoprefixer-core'),
      postcss      = require('gulp-postcss');

  gulp
    .src('app/styles/main.scss')
    .pipe(sass())
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 browers']}) ]))
    .pipe(gulp.dest('public/css'));
});

gulp.task('jade', function () {
  gulp
    .src('app/**/*.jade')
    .pipe(jade({
      pretty: jade
    }))
    .pipe(gulp.dest('public'));
});
