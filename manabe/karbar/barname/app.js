(function () {
	'use strict';

	var app = angular.module('naft', ['angular-loading-bar', 'snap', 'ui.router']);

	app.controller('MainCtrl', function (snapRemote) {
		snapRemote.getSnapper().then(function (snapper) {
			snapper.settings = {
				element: document.getElementById('amir'),
				elementMirror: document.getElementById('btnFix')
			};
		});
	});

	app.config(function (cfpLoadingBarProvider, $stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/khane');
		cfpLoadingBarProvider.latencyThreshold = 5;

		$stateProvider.state('khane', {
				url: '/khane',
				templateUrl: 'barname/khane/khane.html',
				controller: 'khane as kh'
			})
			.state('akhbar', {
				url: '/akhbar',
				templateUrl: 'barname/akhbar/akhbar.html',
				controller: 'akhbar as akh'
			})
			.state('maghale', {
				url: '/maghale',
				templateUrl: 'barname/maghale/maghale.html',
				controller: 'maghale as magh'
			})
			.state('rahbord', {
				url: '/rahbord',
				templateUrl: 'barname/rahbord/rahbord.html',
				controller: 'rahbord as rah'
			})
			.state('zamine', {
				url: '/zamine',
				templateUrl: 'barname/zamine/zamine.html',
				controller: 'zamine as zam'
			})
			.state('darbare', {
				url: '/darbare',
				templateUrl: 'barname/darbare/darbare.html',
				controller: 'darbare as dar'
			})
			.state('ertebat', {
				url: '/ertebat',
				templateUrl: 'barname/ertebat/ertebat.html',
				controller: 'ertebat as er'
			})
			.state('iconha', {
				url: '/iconha',
				templateUrl: 'barname/iconha/icon.html',
				controller: 'icon as jz'
			});
	});

}());
