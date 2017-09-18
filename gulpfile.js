const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    plumber = require('gulp-plumber'),
    gcmq = require('gulp-group-css-media-queries'),
    ghPages = require('gulp-gh-pages'),
    postcss    = require('gulp-postcss');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets/'
    },
    styles:{
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },
    images:{
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts:{
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    },
    icons: {
        src: 'src/icons/',
        dest: 'src/styles/common/'
    },
    fonts: {
        src: 'src/fonts/',
        dest: 'build/assets/fonts/'  
    },

}

//pug
function templates(){
    return gulp.src(paths.templates.pages)
        .pipe(plumber({
            errorHandler: function(error){console.log(error); this.end();}
         }))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.root));
}

//scss
function styles(){
    return gulp.src('./src/styles/app.scss')
        .pipe(plumber({
            errorHandler: function(error){console.log(error); this.end();}
         }))
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe( postcss([ require('precss'), require('autoprefixer')]) )
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}
//del
function clean(){
    return del(paths.root);
}
//images
function images(){
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}
//icons
function icons(){
    return gulp.src(paths.icons.dest + "*.svg")
        .pipe(gulp.dest(paths.images.dest + "icons/"));
}

//webpack
function scripts(){
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

function watch(){
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
}

//reload and watch

function server(){
    browserSync.init({
        server: paths.root,
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}


//fonts
function fonts(){
    return gulp.src(paths.fonts.src + "*.*")
        .pipe(gulp.dest(paths.fonts.dest));
}

//media quieries

function media() {
    return gulp.src(paths.root + 'css/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest(paths.root  + 'css/'));
}

function svgSpriteBuild()   {
    return gulp.src(paths.icons.src + "common/*.svg")
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
                        sprite: "../sprite_common.svg",
                        render: {
                            scss: {
                                dest: './_sprite_common.scss',
                                template: "src/styles/common/_sprite_template.scss"
                            }
                        }
                    }
                }
            }))
            .pipe(gulp.dest(paths.icons.dest));
}


exports.templates = templates;
exports.styles = styles;
exports.del = clean;
exports.images = images;
exports.fonts = fonts;
exports.media = media;
exports.svgsprite = svgSpriteBuild;
exports.icons = icons;
//build
gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, scripts, images, fonts)
));

gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
      .pipe(ghPages());
  });

gulp.task('default',gulp.series(
    gulp.parallel(styles, templates, scripts, images, fonts),
    gulp.parallel(watch, server)
));