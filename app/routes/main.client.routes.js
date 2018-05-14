angular.module('main')
.config(['$routeProvider', function($routeProvider) { 
	$routeProvider.when('/', { 
		templateUrl: 'example/views/main.client.view.html' }). 
	otherwise({
		redirectTo: '/' 
	}); 
} ]);