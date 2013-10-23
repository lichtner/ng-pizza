'use strict';

app.service('Cart', function () {
	var self = {};

	self.total = 0;
	self.cart = [];
	
	self.add = function (name) {
		self.cart.push(name);
	};

	return self;
});