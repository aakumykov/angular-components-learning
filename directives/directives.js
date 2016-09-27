var NL = "\n";

var app = angular.module('MyApp',[]);

app.controller('MyCtrl',function($scope){
	$scope.card = {
		title: 'Заголовок',
		content: 'Содержимое',
		qwerty: function(){ alert('qwerty'); },
	}

	$scope.testClick = function(arg){
		alert(
			'=testClick='+NL+
			'arg: '+arg+NL+
			'title: '+$scope.card.title+NL+
			'content: '+$scope.card.content+NL+
			''
		);
	}
	
	$scope.testChange = function(){
		alert(
			'=testChange='+NL+
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

app.directive('fileDirective',function(){
	return {
		templateUrl: 'include2_file.html'
	}
});

app.directive('functionDirective',function(){
	return {
		templateUrl: function(elem, attr) {
			// alert(
			// 	'elem: '+ elem[0].tagName +NL+
			// 	'attr: '+ attr +NL+
			// 	''
			// )
			return 'include3_dynamic.html'
		}
	}
});

