'use strict';

app.directive('orderList', function () {
	return {
		restrict: "E",
		templateUrl: "js/pizza/OrderListDir.html",
		scope: {
			"list": "=",
			"order": "="
		}
	}
});
