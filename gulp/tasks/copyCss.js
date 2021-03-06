'use strict';

var gulp        = require('gulp');
var config      = require('../config').css;
var browserSync = require('browser-sync');

gulp.task('copy:css', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
