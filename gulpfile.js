var gulp = require('gulp'),
	cssimport = require('gulp-cssimport'),
	fs = require('fs'),
	postcss = require('gulp-postcss'),
	header = require('gulp-header'),
	rename = require('gulp-rename'),
	template = ['/*!',
				' * <%= name %> <%= version %>',
				' * <%= description %>',
				' * <%= homepage %>',
				' * ',
				' * Released under the <%= license %> license',
				' * Copyright (c) <%= new Date().getFullYear() %>, <%= author %>',
				' */\n\n'].join('\n');

gulp.task('default', function () {
	var pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
	return gulp.src('src/' + pkg.name + '.css')
		.pipe(cssimport())
		.pipe(postcss([,
			require('postcss-mixins')({
				mixinsDir: __dirname + '/src/mixins'
			}),
			require('postcss-custom-properties')(),
			require('postcss-nested'),
			require('postcss-calc')()
		]))
		.pipe(header(template, pkg))
		.pipe(gulp.dest('dist'))
		.pipe(postcss([
			require('csswring')()
		]))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});
