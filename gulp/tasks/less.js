'use strict';

var gulp        = require('gulp');
var less        = require('gulp-less');
var concat      = require('gulp-concat');
var browserSync = require('browser-sync');
var config      = require('../config').less;

gulp.task('less', function(){
  return gulp.src(config.src)
    .pipe(less())
    .pipe(concat('creative.css'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
