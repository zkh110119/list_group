const {src, dest, watch, parallel} = require('gulp');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');

function minifyCss() {
    return src('src/css/*.css').pipe(dest('dist/css/')).pipe(minify()).pipe(rename({extname: ".min.css"})).pipe(dest('dist/css/'))
}

function uglifyJs() {
    return src('src/js/*.js').pipe(dest('dist/js/')).pipe(uglify()).pipe(rename({extname: ".min.js"})).pipe(dest('dist/js/'))
}

function startWatcher() {
    return watch('src/*/*.*', {ignoreInitial: false}, parallel(minifyCss, uglifyJs));
}

exports.watcher = startWatcher;

exports.default = parallel(minifyCss, uglifyJs);