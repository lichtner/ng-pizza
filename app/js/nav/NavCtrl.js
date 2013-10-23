'use strict';

app.controller('NavCtrl', function ($scope, $location) {
	$scope.routeIs = function (routeName) {
		return $location.path() === routeName;
	};
});