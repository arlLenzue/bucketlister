angular.module('main')
.service('MainService', ['$http','$window', function($http,$window) { 

	var _this = this;

	_this.getUser = function(data,callback,error){
		_this.http(data,callback);
	}

	_this.getUsers = function(data,callback,error){
		_this.http(data,callback);
	}

	_this.updateUser = function(data,callback,error){
		_this.http(data,callback);
	}

	_this.redirect = function(path){
		$window.location.href = path;
	}
 	 _this.http = function(data,callback,error) { 

 	 		var req = {
				method: data.method,
				url: data.url
			}

			if(data.data) req.data = data.data;

			$http(req).then(function(res){
				if(callback) callback(res.data);
			}, function(err){
				if(error) error(err);
			});
 	 }

 	 return _this; 

 } ]);