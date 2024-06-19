const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./disti/css'));
}

function images(){
    return gulp.src('./src/images/**/*', {encoding: false})
        .pipe(imagemin())
        .pipe(gulp.dest('./disti/images/'));
}


exports.default = gulp.parallel(styles,images);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}