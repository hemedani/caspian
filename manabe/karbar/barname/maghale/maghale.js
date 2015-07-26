(function () {
	'use strict';
	angular.module('naft').controller('maghale', function ($scope, snapRemote) {
		$scope.name = 'maghale';
		snapRemote.close();
	});
}());
