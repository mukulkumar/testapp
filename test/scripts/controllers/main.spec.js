describe('Home Page', function () {
	var scope,
		controller;
	beforeEach(function () {
		module('testApp');
	});

	describe('MainController', function () {
		beforeEach(inject(function ($rootScope, $controller) {
			scope = $rootScope.$new();
			controller = $controller('MainController', {
				'$scope': scope
			});
		}));


		it('name should be', function () {

			scope.customer = {accountNumber: '4111111111111111'};

			var validAccountNumber = false;

			if (scope.customer.accountNumber.length == 16) {
				if (Number.isInteger(scope.customer.accountNumber)) {
					validAccountNumber = true;
				}
			}

			expect(validAccountNumber).toBeTruthy();
		});
	});
});