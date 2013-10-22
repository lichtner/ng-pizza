'use strict';

app.controller('ListCtrl', function ($scope, Pizza) {
	$scope.name = 'Marek';
	Pizza.query(function (data) {
		$scope.list = data;
	});
});