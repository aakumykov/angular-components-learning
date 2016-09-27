var NL="\n";

var app = angular.module('Application',[]);

app.controller('Controller', function($scope){
	$scope.include1 = function(){ return '123.txt'; }

	$scope.load1 = function(){ alert('load1'); }

});
