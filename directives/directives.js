var NL = "\n";

var app = angular.module('MyApp',[]);

app.controller('MyCtrl',function($scope){
	$scope.card = {
		title: 'Заголовок',
		content: 'Содержимое',
	}

	$scope.test1 = function(){
		alert(
			'=test1='+NL+
			'title: '+$scope.card.title+NL+
			'content: '+$scope.card.content+NL+
			''
		);
	}
});

app.directive('w3TestDirective',function(){
	return {
		templateUrl: 'include1.html'
	}
});