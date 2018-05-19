var app = angular.module('app', ['main', 'ngRoute', 'ui.router']); 

app.config(['$locationProvider','$stateProvider', 
	function($locationProvider, $stateProvider) { 

	$locationProvider.hashPrefix('!'); 

 	$stateProvider
 	.state('home', {
        url: '/home',
        templateUrl: 'home/views/home.client.view.html',
        controller: 'MainController'
    })


} ]);