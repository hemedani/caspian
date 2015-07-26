(function () {
	'use strict';
	angular.module('naft').controller('rahbord', function ($scope, snapRemote) {
		$scope.name = 'rahbord';
		snapRemote.close();
	});
}());
