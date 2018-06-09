var app = angular.module('app', ['main', 'ngRoute', 'ui.router','ngAnimate']); 

app.config(['$urlRouterProvider','$stateProvider', 
	function($urlRouterProvider, $stateProvider) { 


    $stateProvider
    
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'home/views/home.client.view.html',
            controller: 'HomeController'
        })
        .state('dashboard.nav', {
            url: '/home',
            templateUrl: 'home/views/home.nav.client.view.html',
            controller: 'HomeController'
        })
        .state('dashboard.item', {
            url: '/items',
            templateUrl: 'home/views/home.item.client.view.html',
            controller: 'HomeController'
        })
        .state('dashboard.template', {
            url: '/templates',
            templateUrl: 'home/views/home.template.client.view.html',
            controller: 'HomeController'
        })
        .state('dashboard.user', {
            url: '/users',
            templateUrl: 'home/views/home.user.client.view.html',
            controller: 'UserController'
        })
        
    $urlRouterProvider.otherwise('/dashboard/home')

} ]);