module.exports = function() {

	var samteKarbar = './manabe/karbar/';
	var barname = samteKarbar + 'barname/';
	var mvg = samteKarbar + 'mvg/';
	var server = './manabe/server/';

	var tanzim = {
		/*
		Tamame Addressha
		*/

		tamamejs: [
			'./*.js'
		],
		tolid: './tolid/',
		karbar: samteKarbar,
		css: [
			mvg + 'index.css',
			barname + 'rs-plugin/css/settings.css'
		],
		fonts: './bower_components/font-awesome/fonts/**/*.*',
		tasavir: samteKarbar + 'tasavir/**/*.*',
		index: samteKarbar + 'index.html',
		js: [
			barname + '**/*.vahed.js',
			barname + '**/*.js',
			'!' + barname + 'rs-plugin/**/*.js'
		],
		stylus: samteKarbar + 'styles/*.styl',
		server: server,
		movaghat: mvg,
		/**
		  * browserSync
		*/
		takhirBazneshaniMororgar: 3000,

		/**
		  * mahale bower va NPM
		*/

		bower: {
			json: require(samteKarbar + 'bower.json'),
			directory: samteKarbar + 'bower_components/'
		},

		/**
		  * tanzimate Node
		*/
		portPishfarz: 1337,
		nodeServer: server + 'app.js'
	};

	tanzim.begiGoziheHayePishfarzWiredep = function () {
		var gozineHa = {
			bowerJson: tanzim.bower.json,
			directory: tanzim.bower.directory
		};
		return gozineHa;
	};

	return tanzim;

};
