'use strict';

var gulp        = require('gulp');
var config      = require('../config').javascript;
var browserSync = require('browser-sync');

gulp.task('copy:javascript', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
