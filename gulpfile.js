const gulp = require('gulp'),
    webpack = require('webpack'),
    // sourcemaps = require('gulp-sourcemaps'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config.js'),
    gulpWebpack = require('gulp-webpack'),
    gutil = require('gulp-util'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync').create();
const paths = {
    root: './build',
    templates: {
        src: 'source/pages/**/*.pug',
        dest: 'build/'
    },
    styles:{
        src: 'source/**/*.scss',
        dest: 'build/css/'
    },
    images:{
        src: 'source/pages/**/*.*',
        dest: 'build/images/'
    },
    scripts:{
        src: 'source/pages/**/*.js',
        dest: 'build/js/'
    },
    all: 'source/**/*.*',
    icons: 'source/components/icons/',
    components: 'source/components/',
}

gulp.task('svgSpriteBuild', function () {
    return gulp.src(paths.icons + 'socials/*.svg')
    // minify svg
    .pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		// remove all fill, style and stroke declarations in out shapes
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true}
		}))
		// cheerio plugin create unnecessary string '&gt;', so replace it.
		.pipe(replace('&gt;', '>'))
		// build svg sprite
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: "../sprite_socials.svg",
					render: {
						scss: {
							dest: './_sprite_socials.scss',
							template: paths.components + "_sprite_template.scss"
						}
					}
				}
			}
		}))
		.pipe(gulp.dest(paths.components + 'sprite/'));
});


var devCompiler = webpack(webpackConfig);
gulp.task('webpack-dev', function(done) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build-dev', err);
        gutil.log('[webpack:build-dev]', stats.toString({
            colors: true
        }));
    });
    done();
});

function server(){
    browserSync.init({
        server: paths.root,
    });
    //browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

//webpack
function scripts(){
    return gulp.src(paths.all)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.root));
}
function watch(){
    gulp.watch(paths.all, gulp.series(scripts, browserSync.reload));
}



// gulp.task('wds', function() {
//     // modify some webpack config options
//     var myConfig = Object.create(webpackConfig);
//     // Start a webpack-dev-server
//     new WebpackDevServer(webpack(myConfig), {
//         stats: 'errors-only',
//         contentBase: 'build/'
//     }).listen(8080, 'localhost', function(err) {
//         if(err) throw new gutil.PluginError('webpack-dev-server', err);
//         gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
//     });
// });
// gulp.task('watch', function() {
//     gulp.watch(['source/**/*.*'], gulp.series('webpack-dev')).on('change', browserSync.reload);
// });
// gulp.task('default', gulp.parallel(
//     gulp.series('webpack-dev','server'),
//     gulp.series('watch')
// ));


gulp.task('default',gulp.series(
    gulp.parallel(scripts),
    gulp.parallel(watch, server)
));