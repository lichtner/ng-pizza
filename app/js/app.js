'use strict';

var app = angular.module('pizza', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/list/list.html',
			controller: 'ListCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});