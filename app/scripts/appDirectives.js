angular.module('customDirectives', []).directive('validateAccountNumber', function () {
	return {
		restrict: 'A',
		scope: {'validateAccountNumber': '='},
		link: function (scope, elm, attrs) {

			scope.$watch('validateAccountNumber', function (nVal) {

				elm.on('keydown', function (e) {
					if (e.which === 190) {
						e.preventDefault();
					}
				});

				if (nVal) {

					if (String(nVal).length > 16) {
						scope.validateAccountNumber = Number(nVal.toString().substring(0, 16));
					}
				}

			});

		}
	};
});