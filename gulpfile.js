var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    tsconfig = require('./tsconfig.json')
    tslint = require('gulp-tslint'),
    uglify = require('gulp-uglify'),
    karma = require('gulp-karma-runner'),
    Server = require('karma').Server;

gulp.task('tslint', function () {
    return gulp.src(['src/main/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report("prose", {emitError : false}));
});
    
gulp.task('compile', ['tslint'], function () {
    return gulp.src(['src/main/**/*.ts'])
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('tslinttest', ['tslint'], function () {
    return gulp.src(['src/test/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report("prose", {emitError : false}));
});

gulp.task('compiletest', ['tslinttest'], function () {
    return gulp.src(['typings/**/*.ts', 'src/**/*.ts'])
        .pipe(ts(tsconfig.compilerOptions))
        .pipe(gulp.dest('test_build'));
});

gulp.task('test', ['compiletest'], function () {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});