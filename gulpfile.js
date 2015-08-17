var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var del = require('del');
var jeet = require('jeet');
var url = require('url');
var tanzim = require('./gulp.tanzim')();

var $ = require('gulp-load-plugins')({
	lazy: true
});

var port = process.env.PORT || tanzim.portPishfarz;

var darKhata = function (err) {
	$.util.beep();
	sabt(err);
};

gulp.task('rahnam', $.taskListing);

gulp.task('default', ['rahnam']);

gulp.task('tabib', function () {
	sabt('Barresi Codha Tavasot JSHint va JSCS ... ');
	return gulp
		.src(tanzim.tamamejs)
		.pipe($.if(args.derazgo, $.print()))
		.pipe($.jscs())
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish', {
			verbose: true
		}))
		.pipe($.jshint.reporter('fail'));
});

gulp.task('style', ['pak-styl'], function () {
	sabt('tabdil filehaye stylus be css va barresi o ezaf kardan prefixHa');
	return gulp
		.src(tanzim.stylIndex)
		.pipe($.plumber({
			errorHandler: darKhata
		}))
		.pipe($.stylus({
			'include css': true,
			use: [jeet()]
		}))
		.pipe($.autoprefixer({
			browsers: ['last 2 versions', '> 5%']
		}))
		.pipe(gulp.dest(tanzim.movaghat));
});

gulp.task('fonts', function () {
	sabt('darim fontharo to shakhe tolid copy mikonim');
	return gulp
		.src(tanzim.fonts)
		.pipe(gulp.dest(tanzim.tolid + 'fonts'));
});

gulp.task('tasavir', function () {
	sabt('darim aksharo feshorde va to shakhe tolid copy mikonim');
	return gulp
		.src(tanzim.tasavir)
		.pipe($.imagemin({
			optimizationLevel: 4
		}))
		.pipe(gulp.dest(tanzim.tolid + 'tasavir'));
});

gulp.task('pak-styl', function (done) {
	var fileha = tanzim.movaghat + '**/*.css';
	tamiz(fileha, done);
});

gulp.task('did-styl', function () {
	gulp.watch([tanzim.stylus], ['style']);
});

gulp.task('wiredep', function () {
	var gozineHa = tanzim.begiGoziheHayePishfarzWiredep();
	var wiredep = require('wiredep').stream;
	return gulp
		.src(tanzim.index)
		.pipe(wiredep(gozineHa))
		.pipe($.inject(gulp.src(tanzim.js), {
			relative: true
		}))
		.pipe(gulp.dest(tanzim.karbar));
});

gulp.task('tazrigh', ['wiredep', 'style'], function () {
	sabt('Darim filehaye css va js ro be dakhele html tazrigh mikonim');
	return gulp
		.src(tanzim.index)
		.pipe($.inject(gulp.src(tanzim.css), {
			relative: true
		}))
		.pipe(gulp.dest(tanzim.karbar));
});

gulp.task('bekar-tose', ['tazrigh'], function () {
	var darTose = true;
	var gozineNode = {
		script: tanzim.nodeServer,
		zamanTakhi: 1,
		mohit: {
			'PORT': port,
			'NODE_ENV': darTose ? 'development' : 'production'
		},
		watch: [tanzim.server]
	};
	return $.nodemon(gozineNode)
		.on('restart', function (ev) {
			sabt('nodemon bazneshani mishavad');
			sabt('in fileha dar bazneshani taghir kardan : ' + ev);
			setTimeout(function () {
				browserSync.notify('darim bazneshani mishim ...');
				browserSync.reload({
					stream: false
				});
			}, tanzim.takhirBazneshaniMororgar);
		})
		.on('start', function () {
			sabt('nodemon shoro be kar kard');
			shoroBroserSync();
		})
		.on('crash', function () {
			sabt('nodemon rikht be ham: code nevisimon be ye dalili be ham rikhtas');
		})
		.on('exit', function () {
			sabt('nodemon tar o tamiz kharej shod');
		});
});

//////////////////// Tavabe

function taghireRoyDade(event) {
	var srcPattern = new RegExp('/.*(?=/' + tanzim.source + ')/');
	sabt('File' + event.path.replace(srcPattern, ' ') + '  ' + event.type);
}

function shoroBroserSync() {
	if (args.nosync || browserSync.active) {
		return;
	}
	sabt('browserSync shoro kard roye port: ' + port);

	gulp.watch([tanzim.stylus], ['style'])
		.on('change', function (event) {
			taghireRoyDade(event);
		});
	var proxyMiddleware = require('http-proxy-middleware');

	var proxy = proxyMiddleware('/api', {
		target: 'http://localhost:' + port
	});

	var gozinehash = {
		// proxy: 'localhost:' + port,
		port: 8800,
		server: {
			baseDir: tanzim.karbar,
			middleware: [proxy]
		},
		files: [
			'manabe/karbar/**/*.*',
			'!manabe/karbar/styles/*.*',
			tanzim.movaghat + '**/*.css'
		],
		ghostMode: {
			clicks: true,
			location: true,
			forms: true,
			scroll: true
		},
		browser: 'chromium-browser',
		// injectChanges: true,
		logFileChanges: true,
		logLevel: 'debug',
		logPrefix: 'gulp-patterns',
		notify: true,
		reloadDelay: 500
	};
	browserSync(gozinehash);
}

function tamiz(masir, done) {
	sabt('darim pak mikoni -> ' + $.util.colors.green(masir));
	del(masir, done);
}

function sabt(peygham) {
	if (typeof (peygham) === 'object') {
		for (var item in peygham) {
			if (peygham.hasOwnProperty(item)) {
				$.util.log($.util.colors.green(peygham[item]));
			}
		}
	} else {
		$.util.log($.util.colors.green(peygham));
	}
}
