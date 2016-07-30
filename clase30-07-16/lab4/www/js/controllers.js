angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope) {

})
   
.controller('page2Ctrl', function($scope) {

})
   
.controller('page3Ctrl', function($scope) {

})
   
.controller('page4Ctrl', function($scope) {

})

.controller('page5Ctrl', function($scope) {
 $scope.dias = ["lunes","martes","miercoles"];
})

.controller('loginCtrl', function($scope, $state) {
$scope.yepp = 'HELLO';
	$scope.goToPage = function(_email, _pass, _description){
		localStorage.setItem('email', _email);
		localStorage.setItem('pass', _pass);
		localStorage.setItem('description', _description);
		$state.go('tabsController.cartTabDefaultPage');
	}
})

.controller('home_01Ctrl', function($scope) {
console.log(localStorage.getItem('email'));
	$scope.email = localStorage.getItem('email');
	$scope.pass = localStorage.getItem('pass');
	$scope.description = localStorage.getItem('description');
})
