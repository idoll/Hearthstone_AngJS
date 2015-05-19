angular.module('routes', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider.when('/cards',{
				templateUrl:'templates/cards/index.html'
			})
			.otherwise({
				redirectTo:'/cards'	
			});
		});