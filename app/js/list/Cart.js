'use strict';

app.service('Cart', function () {
	var self = {};

	self.total = 0;
	self.cart = [];
	
	self.add = function (pizza) {
		self.cart.push(pizza);
		self.total += pizza.price;
	};

	self.clear = function () {
		self.cart = [];
		self.total = 0;
	};

	return self;
});