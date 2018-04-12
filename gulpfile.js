var gulp = require('gulp')
var concat = require('gulp-concat');

// Styles
var stylus = require('gulp-stylus');

// HTML
var pug = require('gulp-pug');

gulp.task('styl', function(){
    gulp.src('src/{pages,components}/**/*.styl')
        .pipe(stylus())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('dist/'));
});


gulp.task('js', function(){
    gulp.src('src/{pages,components}/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/'));
});


gulp.task('assets', function(){
    gulp.src('src/assets/**/*.*')
        .pipe(gulp.dest('dist/'));
});


gulp.task('pug', function(){
    gulp.src('src/pages/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
    gulp.watch('src/{pages,components}/**/*.styl', ['styl']);
    gulp.watch('src/{pages,components}/**/*.pug', ['pug']);
    gulp.watch('src/{pages,components}/**/*.js', ['js']);
    gulp.watch('assets/**/*.*', ['assets']);
});

gulp.task('default', [ 'styl', 'pug', 'js', 'assets', 'watch']);


