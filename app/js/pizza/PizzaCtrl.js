'use strict';

app.controller('PizzaCtrl', function ($scope, Pizza, Cart) {
	Pizza.query(function (data) {
		$scope.list = data;
	});

	$scope.cart = Cart;
	$scope.search = null;

});