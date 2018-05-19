angular.module('main', [])
.controller('MainController', 
	['$scope','$http', '$window','MainService',
	function($scope, $http, $window, MainService) { 

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

		_model.test = function(){
			if ( $( ".bg-img" ).length ) {

				$( ".bg-img" ).each(function() {

					var post 	= $(this),
						bg 		= post.data('bg');

					post.css( 'background-image', 'url(images/' + bg + ')' );

				});


			}
		}

		$scope.model = _model;


	}
]);
