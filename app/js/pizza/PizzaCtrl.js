'use strict';

app.controller('PizzaCtrl', function ($scope, Pizza, Order) {
	Pizza.query(function (data) {
		$scope.list = data;
	});

	$scope.order = Order;
	$scope.search = null;

});