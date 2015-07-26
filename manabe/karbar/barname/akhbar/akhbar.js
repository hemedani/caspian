(function () {
	'use strict';
	angular.module('naft').controller('akhbar', function ($scope, snapRemote) {
		$scope.name = 'akhbar';
		snapRemote.close();
	});
}());
