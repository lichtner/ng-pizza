'use strict';

app.factory('Pizza', function ($resource) {
	return $resource('api/pizza.json');
});