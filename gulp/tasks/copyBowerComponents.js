'use strict';

var gulp        = require('gulp');
var config      = require('../config').bowerComponents;
var browserSync = require('browser-sync');

gulp.task('copy:bower', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
