/**
 * Created by tongda on 15/8/19.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var wiredep = require('wiredep').stream;
var $ = require('gulp-load-plugins')();
var _ = require('lodash');
gulp.task('inject', ['scripts','styles'], function () {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*.css'),
        path.join('!' + conf.paths.tmp, '/serve/app/vendor.css'),
        path.join('!' + conf.paths.tmp, '/serve/app/login/**/*.css')
    ], { read: false });

    var injectScripts = gulp.src([
        path.join(conf.paths.tmp, '/serve/app/**/*.module.js'),
        path.join(conf.paths.tmp, '/serve/app/**/*.js'),
        path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/app/**/*.mock.js')
    ], { read: false });

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/index.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});