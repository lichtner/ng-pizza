'use strict';

var app = angular.module('pizza', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/pizza/pizza.html',
			controller: 'PizzaCtrl'
		})
		.when('/about', {
			templateUrl: 'js/nav/about.html'
		})
		.when('/help', {
			templateUrl: 'js/nav/help.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});