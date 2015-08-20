'use strict';

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.less.src,   ['less']);
  gulp.watch(config.javascript.src, ['copy:javascript']);
  gulp.watch(config.images.src, ['copy:images']);
  gulp.watch(config.html.src, ['copy:html']);
  gulp.watch(config.bowerComponents.src, ['copy:bower']);
});
