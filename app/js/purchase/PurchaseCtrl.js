'use strict';

app.controller('PurchaseCtrl', function ($scope, $location, Order) {
	if (Order.total === 0) {
		$location.path('/');
	}
	$scope.order = Order;
});