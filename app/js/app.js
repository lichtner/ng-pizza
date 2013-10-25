'use strict';

var app = angular.module('pizza', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/pizza/pizza.html',
			controller: 'PizzaCtrl'
		})
		.when('/purchase', {
			templateUrl: 'js/purchase/purchase.html',
			controller: 'PurchaseCtrl'
		})
		.when('/about-me', {
			templateUrl: 'js/nav/about-me.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});