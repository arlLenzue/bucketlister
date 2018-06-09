angular.module('main', [])
.controller('HomeController', 
	['$scope','$http', '$window','MainService','$stateParams',
	function($scope, $http, $window, MainService, $stateParams) { 

		var _model = {};

		_model.init = init;
		_model.redirectBtn = redirectBtn;

		function init(){
			getUser();
		};

		function redirectBtn(name){
			redirectBtn(name);
		};

		function getUser(){

			var data = {
				method: 'GET',
				url: '/getUser'
			}

			MainService.getUser(data, function(user){
				_model.user = user;
			})
		}

		function redirectBtn(name){
			MainService.redirect('/'+name);
		}

		$scope.model = _model;
	}

])
.controller('UserController', 
	['$scope','$http', '$window','MainService','$stateParams',
	function($scope, $http, $window, MainService, $stateParams) { 

		var _model = {};

		_model.getUsers = getUsers;
		_model.select = select;

		function getUsers(){

			var data = {
				method: 'GET',
				url: '/getUsers'
			}

			MainService.getUser(data, function(user){
				_model.users = user;
			})
		}

		function select(user){
			console.log(user);
			_model.user = user;
		}

		$scope.model = _model;
	}
]);