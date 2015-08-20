var gulp = require('gulp');

gulp.task('default', [
  'less',
  'copy:css',
  'copy:javascript',
  'copy:bower',
  'copy:fonts',
  'copy:images',
  'copy:html',
  'watch'
]);
