(function () {
	'use strict';
	angular.module('naft').controller('khane', function ($scope, snapRemote) {
		$scope.name = 'khane';
		snapRemote.close();
		$('#amir').scrollTop = 0;
	});
}());
