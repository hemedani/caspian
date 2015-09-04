(function () {
	'use strict';
	angular.module('naft').directive('menuItem', function () {
		return {
			restrict: 'AE',
			replace: true,
			scope: {
				gozineha: '='
			},
			templateUrl: 'template/menu-kenar/menu-item.html'
		};
	});
}());
