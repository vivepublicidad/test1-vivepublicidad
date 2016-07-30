angular.module('lab1a', [])

.controller('ExampleController', ['$scope', function($scope) {
      $scope.salary = 1234.56;
    }])

.controller('lab1aController', function($scope, $filter) {
	

	$scope.name = $filter('uppercase')('nombre completo');
	$scope.id = 'cedula';
	$scope.profession = 'Profesion';
	$scope.salary = 1234.56;
	$scope.phone = 'telefono';




});




