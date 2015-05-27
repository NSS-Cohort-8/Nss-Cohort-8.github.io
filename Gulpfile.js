var gulp = require('gulp'),
    jade = require('gulp-jade'),
    copy = require('gulp-copy'),
    sass = require('gulp-sass'),
   watch = require('gulp-watch');

//////////WATCH////////////////////////////////////
gulp.task('watch', function () {
  watch('./app/**/*', function() {
    gulp.start('build');
  });
});
//////////SASS////////////////////////////////////
gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths
      includePaths: require('node-neat').includePaths
    }))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'));
});
//////////COPY////////////////////////////////////
gulp.task('copy', function () {
  gulp.src(['./app/**/*.js', './app/**/*.jpg', './app/**/*.jpeg', './app/**/*.png', './app/**/*.gif', './app/**/*.mp4'])
  .pipe(copy('./public/', {prefix:1}))
});
//////////JADE////////////////////////////////////
gulp.task('jade', function() {
  gulp.src('./app/**/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
});
//////////DEFAULT////////////////////////////////////
gulp.task('build', ['copy', 'jade', 'sass']);
gulp.task('default', ['build', 'watch']);
