(function () {
	'use strict';
	angular.module('naft').controller('zamine', function ($scope, snapRemote) {
		$scope.name = 'zamine';
		snapRemote.close();
	});
}());
