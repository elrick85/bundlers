var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', ['ts', 'sass']);

gulp.task('ts', () => {
    return gulp.src(['src/app/**/*.tsx', 'src/app/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', () => {
    return gulp.src(['src/styles/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dist'));
})

gulp.task('watch', ['default'], function () {
    gulp.watch(['src/client/**/*.ts', 'src/client/**/*.tsx'], ['default']);
});