(function () {
	'use strict';
	angular.module('naft')
		.controller('khane', function ($scope) {
			$scope.name = 'khane';
			$scope.mySlides = {
				img: [
					'tasavir/Pix/1.jpg',
					'tasavir/Pix/2.jpg',
					'tasavir/Pix/3.jpg',
					'tasavir/Pix/4.jpg'
				]
			};

			$scope.slideshow = {};
			$scope.slideshow.slides = [
				'tasavir/Pix/1.jpg',
				'tasavir/Pix/2.jpg',
				'tasavir/Pix/3.jpg',
				'tasavir/Pix/4.jpg'
			];
			// var logId = 0;
			// $scope.slideshow.log = [];
			// $scope.slideshow.start = function (slider) {
			// 	console.log(slider);
			// 	$scope.slideshow.log.push({
			// 		id: ++logId,
			// 		message: 'start'
			// 	});
			// };
			// $scope.slideshow.before = function () {
			// 	$scope.slideshow.log.push({
			// 		id: ++logId,
			// 		message: 'before'
			// 	});
			// };
			// $scope.slideshow.after = function () {
			// 	$scope.slideshow.log.push({
			// 		id: ++logId,
			// 		message: 'after'
			// 	});
			// };
			// $scope.slideshow.end = function () {
			// 	$scope.slideshow.log.push({
			// 		id: ++logId,
			// 		message: 'end'
			// 	});
			// };

		}); //END >> controller('khane',
}());
