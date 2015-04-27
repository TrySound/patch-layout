var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	p = require('postcss-load-plugins')(),
	template = ['/*!',
				' * <%= name %> <%= version %>',
				' * <%= description %>',
				' * <%= homepage %>',
				' * ',
				' * Released under the <%= license %> license',
				' * Copyright (c) <%= new Date().getFullYear() %>, <%= author %>',
				' */\n\n'].join('\n');

gulp.task('default', function () {
	var pkg = JSON.parse(require('fs').readFileSync('package.json', 'utf-8'));

	return gulp.src([
			'src/params.css',
			'src/responsive.css',
			'src/container.css',
			'src/grid.css',
			'src/align.css',
			'src/visibility.css'
		])
		.pipe($.concat(pkg.name + '.css'))
		.pipe($.postcss([
			p.for(),
			p.mixins(),
			p.customMedia(),
			p.customProperties(),
			p.nested,
			// Bootstrap non-conflict version
			// p.pixrem('16px', {replace: true }),
			p.calc(),
			p.mqpacker()
		]))
		.pipe($.header(template, pkg))
		.pipe(gulp.dest('dist'))
		.pipe($.postcss([
			require('csswring')()
		]))
		.pipe($.rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('dev', ['default'], function () {
	gulp.watch('src/**/*.css', ['default']);
});
