(function () {
	'use strict';
	angular.module('naft').controller('darbare', function ($scope, snapRemote) {
		$scope.name = 'darbare';
		snapRemote.close();
	});
}());
