'use strict';

app.controller('PizzaCtrl', function ($scope, Pizza, Order) {
	Pizza.query(function (data) {
		$scope.pizzaList = data;
	});
	$scope.order = Order;
});