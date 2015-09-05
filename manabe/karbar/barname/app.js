(function() {
	'use strict';

	var app = angular.module('naft', ['ui.router', 'ngAnimate', 'ngTouch', 'angular-loading-bar', 'duParallax']);

	app.controller('asliCtrl', function($rootScope, $scope, $anchorScroll) {
		$rootScope.$on('$stateChangeStart', function() {
			if ($('section').hasClass('in-view')) {
				$('section').removeClass('in-view');
			}
		});
		$rootScope.$on('$stateChangeSuccess', function() {
			$('html, body').animate({
				scrollTop: 0
			}, 800);
		});
		$scope.collapse = function() {
			if ($('section').hasClass('in-view')) {
				$('section').removeClass('in-view');
			} else {
				$('section').addClass('in-view');
			}
		};
		$scope.baz = function() {
			if (!$('section').hasClass('in-view')) {
				$('section').addClass('in-view');
			}
		};

		$scope.baste = function() {
			if ($('section').hasClass('in-view')) {
				$('section').removeClass('in-view');
			}
		};

		$scope.gozineha = [{
			masir: 'khane',
			icon: 'icon-home',
			esm: 'خانه'
		}, {
			masir: 'akhbar',
			icon: 'icon-newspaper',
			esm: 'اخبار'
		}, {
			masir: 'maghale',
			icon: 'icon-pencil',
			esm: 'مقالات'
		}, {
			masir: 'rahbord',
			icon: 'icon-eye',
			esm: 'راهبردها'
		}, {
			masir: 'zamine',
			icon: 'icon-droplet',
			esm: 'زمینه کاری'
		}, {
			masir: 'darbare',
			icon: 'icon-info',
			esm: 'درباره ما'
		}, {
			masir: 'ertebat',
			icon: 'icon-phone',
			esm: 'ارتباط با ما'
		}, {
			masir: 'iconha',
			icon: 'icon-home',
			esm: 'آیکون ها'
		}];
	});

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/khane');

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
