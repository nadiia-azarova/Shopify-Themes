const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const gulpHtmlBemValidator = require('gulp-html-bem-validator');

const buildPath = './assets/';
const srcPath = './src/';
const liquidPath = './sections/';

const path = {
    src: {
        liquid: liquidPath + '**/*.liquid',
        css: srcPath + 'css/**/*.{scss,css}',
        js: srcPath + 'js/**/*.js',
        images: srcPath + 'images/**/*.{png,jpg,svg,gif}',
        fonts: srcPath + 'fonts/**',
    },
    watch: {
        css: srcPath + 'css/**/*.{scss,css}',
        js: srcPath + 'js/**/*.js',
        images: srcPath + 'images/**/*.{png,jpg,svg,gif}',
    },
};

function checkBEM() {
    return gulp.src(path.src.liquid).pipe(gulpHtmlBemValidator());
}

function buildStyles() {
    return gulp
        .src(path.src.css)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(buildPath));
}

function buildJS() {
    return gulp.src(path.src.js).pipe(gulp.dest(buildPath));
}

function buildFonts() {
    return gulp.src(path.src.fonts).pipe(gulp.dest(buildPath));
}

function buildImages() {
    return gulp.src(path.src.images).pipe(gulp.dest(buildPath));
}

// Global Watcher
function watchAll() {
    // gulp.watch(path.src.liquid, checkBEM);
    gulp.watch(path.src.images, buildImages);
    gulp.watch(path.src.css, buildStyles);
    gulp.watch(path.src.js, buildJS);
}

exports.default = gulp.series(buildFonts, buildImages, watchAll);
