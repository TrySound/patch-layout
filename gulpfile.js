var readFile = require('fs').readFileSync;
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var header = require('gulp-header');
var rename = require('gulp-rename');
var pkg = JSON.parse(readFile('package.json', 'utf-8'));
var template = ['/*!',
				' * <%= name %> <%= version %>',
				' * <%= description %>',
				' * <%= homepage %>',
				' * ',
				' * Released under the <%= license %> license',
				' * Copyright (c) <%= new Date().getFullYear() %>, <%= author %>',
				' */\n\n'].join('\n');

gulp.task('default', function (done) {
	return gulp.src([
			'src/' + pkg.name + '.css'
		])
		.pipe(postcss([
			require('precss'),
			require('postcss-calc'),
			require('postcss-clearfix')
		]))
		.on('error', done)
		.pipe(header(template, pkg))
		.pipe(gulp.dest('dist'))
		.pipe(postcss([
			require('cssnano'),
			require('css-mqpacker')
		]))
		.on('error', done)
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});
