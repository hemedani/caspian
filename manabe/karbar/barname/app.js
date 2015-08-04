(function () {
	'use strict';

	var app = angular.module('naft', ['ui.router', 'ngAnimate', 'angular-loading-bar', 'snap', 'duParallax', 'angular-flexslider']);

	app.controller('asliCtrl', function ($rootScope, $anchorScroll, snapRemote) {
		$rootScope.$on('$stateChangeSuccess', function () {
			$('#AmirSnapper').animate({
				scrollTop: 0
			}, 800);
			snapRemote.close();
		});
	});

	app.config(function ($stateProvider, $urlRouterProvider, snapRemoteProvider) {

		$urlRouterProvider.otherwise('/khane');
		snapRemoteProvider.globalOptions = {
			disable: 'left'
		};

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
				controller: 'icon as ic'
			});
	});

}());
