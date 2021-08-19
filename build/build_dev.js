const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('compile-css', () => {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path) => {
			console.log(path)
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('auto', () => {
    gulp.watch('../src/**/*.less', gulp.series('compile-css'));
    gulp.watch('../src/**/*.js', gulp.series('compile-js'));
    gulp.watch('../src/**/*.json', gulp.series('compile-json'));
    gulp.watch('../src/**/*.wxml', gulp.series('compile-wxml'));
});

gulp.task("default",gulp.series("compile-css","compile-js","compile-json","compile-wxml","auto"));