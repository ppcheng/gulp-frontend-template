# gulp-frontend-template

The main purpose of this repo is to generate a frontend/single-page application using [Gulp](http://gulpjs.com/).

#### Overview
  - [Basic](#basic)
  - [To-Dos](#to-dos)
  - [Demo](#demo)
  - [Reference](#reference)


#### Basic
  1. Run `npm install && bower install` to install all node and bower dependencies;
  2. Type `gulp` or `node_modules/.bin/gulp` in terminal to execute the default task to build a example frontend project using [startbootstrap creative template](http://ironsummitmedia.github.io/startbootstrap-creative/);
  3. Thanks to `browser-sync` package, browser will automatically start once building process is complete;

**This system is capable to watch for any changes on javascripts, stylesheets (css/less) and html files; It will automatically inject the changes and refresh the browser for you.


#### To-Dos
  - [ ] Use Dynamic Loading (*i.e. inject script & style tags automatically to index html*)
  - [ ] Add `angular`, `backbone` & `react` examples
  - [ ] Add `autoprefixer` & `sourcemap` during `less` conversion
  - [ ] Add automatic node & bower installation function using `gulp-install`
  - [ ] Add a heroku demo
  - [ ] Minify all image, style & javascript files
  - [ ] Have one `vendor` directory to manage any manually added 3rd scripts/stylesheets

#### Demo

#### Reference
