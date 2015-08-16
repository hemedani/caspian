(function () {
	'use strict';
	angular.module('naft')
		.controller('khane', function ($scope) {
			$scope.name = 'khane';

			$scope.slideshow = {};
			$scope.slideshow.slides = [
				'tasavir/Pix/Doros/1.jpg',
				'tasavir/Pix/Doros/2.jpg',
				'tasavir/Pix/Doros/3.jpg',
				'tasavir/Pix/Doros/4.jpg'
			];
			$scope.akhbar = [{
				'id': 1,
				'onvan': 'خبر شماره ۱',
				'tasvir': '1.jpg',
				'matn': 'متن خبر شماره ۱ شماره ۱ متن خبر شماره ۱ شماره ۱ متن خبر شماره ۱ شماره ۱ متن خبر شماره'
			}, {
				'id': 2,
				'onvan': 'خبر شماره ۲',
				'tasvir': '2.jpg',
				'matn': 'خبر شماره ۲ خبر شماره ۲ خبر شماره ۲ خبر شماره ۲ خبر شماره ۲ خبر شماره ۲'
			}, {
				'id': 3,
				'onvan': 'خبر شماره ۳',
				'tasvir': '3.jpg',
				'matn': 'خبر شماره ۳ خبر شماره ۳ خبر شماره ۳ خبر شماره ۳ خبر شماره ۳ خبر شماره ۳ '
			}, {
				'id': 4,
				'onvan': 'خبر شماره ۴',
				'tasvir': '4.jpg',
				'matn': 'خبر شماره ۴ خبر شماره ۴ خبر شماره ۴ خبر شماره ۴ خبر شماره ۴ خبر شماره ۴ '
			}, {
				'id': 5,
				'onvan': 'خبر شماره ۵',
				'tasvir': '2.jpg',
				'matn': 'خبر شماره ۵ خبر شماره ۵ خبر شماره ۵ خبر شماره ۵ خبر شماره ۵ خبر شماره ۵ خبر شماره ۵ '
			}, {
				'id': 6,
				'onvan': 'خبر شماره ۶',
				'tasvir': '1.jpg',
				'matn': 'خبر شماره ۶ خبر شماره ۶ خبر شماره ۶ خبر شماره ۶ خبر شماره ۶ '
			}];

			$scope.images = [{
				src: '1.jpg',
				h: 'متن شماره یک',
				p: 'متن شماره یک متن شماره یک متن شماره یک متن شماره یک متن شماره یک'
			}, {
				src: '2.jpg',
				h: 'متن شماره دو',
				p: 'متن شماره دو متن شماره دو متن شماره دو متن شماره دو متن شماره دو متن شماره دو'
			}, {
				src: '3.jpg',
				h: 'متن شماره سه',
				p: 'متن شماره سه متن شماره سه متن شماره سه متن شماره سه متن شماره سه متن شماره سه '
			}, {
				src: '4.jpg',
				h: 'متن شماره چهار',
				p: 'متن شماره چهار متن شماره چهار متن شماره چهار متن شماره چهار متن شماره چهار متن شماره چهار '
			}, {
				src: '3.jpg',
				h: 'متن شماره پنج',
				p: 'متن شماره پنج متن شماره پنج متن شماره پنج متن شماره پنج متن شماره پنج متن شماره پنج'
			}];
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
