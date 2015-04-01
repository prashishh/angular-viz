'use strict';

// Main Dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var gulpLoadPlugins = require('gulp-load-plugins');

var plugins = gulpLoadPlugins();

// Directories
var clientDir = './client/';
var publicDir = './public/';
var clientJSFiles = clientDir + '**/*.js';
var clientCSSFiles = clientDir + 'css/**/*.css';
var serverFiles = './app/**/*.js';
var testFiles = '';

var publicAssets = './client/development/';

// Lint Task
gulp.task('lint', function() {
	return (
		gulp.src(['gulpfile.js', serverFiles, clientJSFiles])
				.pipe(plugins.jshint())
				.pipe(plugins.jshint.reporter('jshint-stylish'))
	);
});

// Bundle JS Task
gulp.task('js', function() {
  var start = Date.now();
  gutil.log('Building app.js bundle');
  return (
		gulp.src(['client/app.js', 'client/**/*.js'])
				.pipe(plugins.concat('app.js'))
		  	.pipe(gulp.dest(publicDir + 'js'))
				.pipe(plugins.notify(function () {
	      	gutil.log('app.js bundle built in ' + (Date.now() - start) + 'ms');
	      }))
  );
});

// Bundle CSS Task
gulp.task('css', function() {
  var start = Date.now();
  gutil.log('Building main.css bundle');
	return (
		gulp.src(clientCSSFiles)
				.pipe(plugins.concat('main.css'))
		  	.pipe(gulp.dest(publicDir + 'css'))
				//.pipe(plugins.rename('main.min.css'))
	      //.pipe(plugins.cssmin())
		  	//.pipe(gulp.dest(publicDir + 'css'))
				.pipe(plugins.notify(function () {
	      	gutil.log('main.css bundle built in ' + (Date.now() - start) + 'ms');
	      }))
	);
});

// Watch files for changes
gulp.task('watch', function() {
	gulp.watch(clientJSFiles, ['lint', 'js', 'css']);
});

// Nodemon Tasks
gulp.task('nodemon', function() {
	plugins.nodemon({
		script: 'app.js', 
		watch: serverFiles,
	})
	.on('change', ['watch'])
	.on('restart', function() {
		gutil.log('Nodemon restarted');
	});
});

gulp.task('build', ['lint', 'css', 'js', 'nodemon']);
