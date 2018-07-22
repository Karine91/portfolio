const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpWebpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    gcmq = require('gulp-group-css-media-queries'),
    ghPages = require('gulp-gh-pages'),
    postcss    = require('gulp-postcss'),
    imagemin = require('gulp-imagemin'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify');

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
    userfiles:{
        src: 'src/userfiles/**/*.*',
        dest: 'build/userfiles/'
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
    admin:{
        src: ['src/admin/**/*.js', 'src/admin/**/*.scss', 'src/admin/**/*.vue']
    }

}

//pug
function templates(){
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty: true}))
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(paths.root));
}

//scss
function styles(){
    return gulp.src('./src/styles/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe( postcss([ require('precss'), require('autoprefixer')]) )
        .pipe(sourcemaps.write())
        .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(paths.styles.dest));
}
//del
function clean(){
    return del(paths.root);
}
//images
function images(){
    return gulp.src(paths.images.src)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest(paths.images.dest));
}
//userfiles
function userfiles(){
    return gulp.src(paths.userfiles.src)
        .pipe(gulp.dest(paths.userfiles.dest));
}
//icons
function icons(){
    return gulp.src('src/images/icons/*.svg')
        .pipe(gulp.dest(paths.images.dest + "icons/"));
}

//webpack
function scripts(){
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(paths.scripts.dest));
}


//reload and watch

function reload(done) {
    browserSync.reload();
    done();
}

function watch(){
    browserSync.init({
        server: {
            baseDir: paths.root
        },
    });
    gulp.watch(paths.styles.src, gulp.series(styles, cssInject));
    gulp.watch(paths.templates.src, gulp.series(templates)).on('change', browserSync.reload);
    gulp.watch(paths.scripts.src, gulp.series(scripts, reload));
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

function cssInject () {
    return gulp.src(paths.styles.src)
        .pipe(browserSync.stream());
}


exports.templates = templates;
exports.styles = styles;
exports.del = clean;
exports.images = images;
exports.userfiles = userfiles;
exports.fonts = fonts;
exports.media = media;
exports.svgsprite = svgSpriteBuild;
exports.icons = icons;

//build
gulp.task('compressedScripts', function () {
    return gulp.src('./build/assets/scripts/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/assets/scripts/'));
});

gulp.task('compressedStyles', function () {
    return gulp.src('./build/assets/styles/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/assets/styles/'));
});

gulp.task('preparebuild', gulp.parallel('compressedScripts', 'compressedStyles'));

gulp.task('build', gulp.series(
    clean,
    gulp.parallel(styles, templates, scripts, images, userfiles, fonts, icons),
    'preparebuild'
));

gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
      .pipe(ghPages());
  });

gulp.task('default',gulp.series(
    gulp.parallel(styles, templates, scripts),
    watch
));

gulp.task('previewBuild', function() {
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
});