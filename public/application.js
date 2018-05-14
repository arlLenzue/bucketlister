var app = angular.module('app', ['main', 'ngRoute']); 

app.config(['$locationProvider',function($locationProvider) { $locationProvider.hashPrefix('!'); } ]);