var src  = './src';
var dest = './dist';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    },
    port: process.env.PORT || 8080
  },
  less: {
    src: src + '/styles/vendor/less/*.less',
    dest: dest + '/css',
  },
  css: {
    src: src + '/styles/vendor/css/*.css',
    dest: dest + '/css'
  },
  images: {
    src: src + '/images/**/*',
    dest: dest + '/img'
  },
  html: {
    src: src + '/index.html',
    dest: dest + '/'
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/fonts',
  },
  javascript: {
    src: src + '/scripts/vendor/*.js',
    dest: dest + '/js'
  },
  bowerComponents: {
    src: src + '/bower_components/**/*',
    dest: dest + '/bower_components'
  }
};
