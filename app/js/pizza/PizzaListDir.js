'use strict';

app.directive('pizzaList', function () {
	return {
		restrict: "E",
		templateUrl: "js/pizza/PizzaListDir.html",
		scope: {
			"list": "=",
			"order": "="
		}
	}
});