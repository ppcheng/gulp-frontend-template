'use strict';

var gulp        = require('gulp');
var config      = require('../config').images;
var browserSync = require('browser-sync');

gulp.task('copy:images', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
