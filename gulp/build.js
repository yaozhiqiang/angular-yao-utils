/**
 * Created by tongda on 15/8/26.
 */
var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var $ = require('gulp-load-plugins')();

gulp.task('partials',function() {
    return gulp.src([
        path.join(conf.paths.src + '/app/**/*.tpl.html')
    ])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe($.angularTemplatecache('templateCacheHtml.js', {
            module: 'angular-yao-utils',
            root: 'app'
        }))
        .pipe(gulp.dest(conf.paths.tmp + '/partials/'));
});

// Only applies for fonts from bower dependencies
// Custom fonts are handled by the "other" task
gulp.task('fonts', function () {
    return gulp.src(path.join(conf.wiredep.directory+'/**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});

gulp.task('build', ['scripts:product'], function(){
    return gulp.src([
        path.join(conf.paths.tmp + '/product/*.js'),
        path.join(conf.paths.tmp + '/partials/*.js')
    ])
        .pipe($.concat('angular-yao-utils.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(conf.paths.dist));
});