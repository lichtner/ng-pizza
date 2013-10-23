'use strict';

app.controller('ListCtrl', function ($scope, Pizza, Cart) {
	Pizza.query(function (data) {
		$scope.list = data;
	});

	$scope.cart = Cart;
	$scope.search = null;

});