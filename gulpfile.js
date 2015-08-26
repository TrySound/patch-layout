var readFile = require('fs').readFileSync;
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var plugin = require('postcss').plugin;
var header = require('gulp-header');
var rename = require('gulp-rename');
var pkg = JSON.parse(readFile('package.json', 'utf-8'));
var template = ['/*!',
				' * <%= name %> <%= version %>',
				' * <%= homepage %>',
				' * Copyright <%= new Date().getFullYear() %> <%= author %>',
				' */\n\n'].join('\n');


gulp.task('default', function (done) {
	return gulp.src([
			'src/' + pkg.name + '.css'
		])
		.pipe(postcss([
			require('precss'),
			require('postcss-calc'),
			require('postcss-clearfix'),
			plugin('postcss-selector-fmt', function () {
				return function (css) {
					css.eachRule(function (rule) {
						rule.selector = rule.selectors.join(',\n');
					});
				};
			})
		]))
		.on('error', done)
		.pipe(header(template, pkg))
		.pipe(gulp.dest('dist'));
});
