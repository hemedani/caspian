(function () {
	'use strict';
	angular.module('naft').controller('ertebat', function ($scope, snapRemote) {
		$scope.name = 'ertebat';
		snapRemote.close();
	});
}());
