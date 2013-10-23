'use strict';

app.service('Cart', function ($rootScope) {
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

	createPersistentProperty('cart', 'fmCart', Array);
    createPersistentProperty('total', 'fmTotal', Number);

	function createPersistentProperty(localName, storageName, Type) {
		var json = localStorage[storageName];

		self[localName] = json ? JSON.parse(json) : new Type;

		$rootScope.$watch(
			function() { return self[localName]; },
			function(value) {
				if (value) {
					localStorage[storageName] = JSON.stringify(value);
				}
			},
			true
		);
	}

	return self;
});