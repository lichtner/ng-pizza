'use strict';

app.service('Cart', function ($rootScope) {
	var self = {};

	self.total = 0;
	self.cart = [];

	self.add = function (pizza) {
		var newPizza = true;
		for (var i = 0; i < self.cart.length; i++) {
			if (self.cart[i].pizza.id == pizza.id) {
				self.cart[i].count += 1;
				newPizza = false;
			}
		}
		if (newPizza) {
			self.cart.push({
				"count": 1,
				"pizza": pizza
			});
		}
		self.total += pizza.price;
	};

	self.clear = function () {
		self.total = 0;
		self.cart = [];
	};

	createPersistentProperty('cart', 'fmCart', Array);
	createPersistentProperty('total', 'fmTotal', Number);

	function createPersistentProperty(localName, storageName, Type) {
		var json = localStorage[storageName];

		self[localName] = json ? JSON.parse(json) : new Type;

		$rootScope.$watch(
			function () {
				return self[localName];
			},
			function (value) {
				localStorage[storageName] = JSON.stringify(value);
			},
			true
		);
	}

	return self;
});