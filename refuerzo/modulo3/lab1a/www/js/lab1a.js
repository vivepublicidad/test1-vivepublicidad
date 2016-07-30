angular.module('lab1a',  [])
.controller('lab1aController', function($scope){

    $scope.reset = function(){
        $scope.firstName = 'Alejandro';
        $scope.lastName = 'Romero',
        $scope.email = "alejo8591@gmail.com";
        $scope.age = 18;
    }

    $scope.reset();
});