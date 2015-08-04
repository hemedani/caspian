(function () {
	'use strict';

	angular.module('naft').directive('myScroll', function ($rootScope, $anchorScroll, snapRemote) {
		return function (scope, element) {
			$rootScope.$on('$stateChangeSuccess', function () {
				$anchorScroll();
				snapRemote.close();
			});
		};
	});

}());
