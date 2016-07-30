angular.module('modulo5',  [])
.controller('moduloController', function($scope, $http){
                var url = "data.json";
                $http.get(url).success(function(response){

                  console.log(response);
                  
                  $scope.modulos = response;
                });
              });