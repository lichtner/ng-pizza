'use strict';

app.service('Order', function ($rootScope, $http) {
	var self = {};

	self.total = 0;
	self.time = 0;
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

	self.remove = function (index) {
		self.total -= self.cart[index].count * self.cart[index].pizza.price;
		self.cart.splice(index, 1);
	};

	self.clear = function () {
		self.total = 0;
		self.cart = [];
	};

	self.purchase = function () {
		if (self.cart.length) {
			$http.post('api/purchase.json', {
				cart: self.cart
			}).success(function(data) {
				self.clear();
				self.time = data.time;
			});
		}
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