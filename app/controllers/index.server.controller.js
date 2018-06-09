exports.render = function(req, res) {

	req.session.lastVisit = new Date();

	if(req.user){
		if(req.user.role == "Admin"){ //temporary
			res.render('admin', { 
				title: 'Bucket Lister'
			});
		}else{
			res.render('index', { 
				title: 'Bucket Lister'
			});
		}
	}else{
		res.render('landing-page', { 
			title: 'Bucket Lister'
		});
	}
	
};

exports.dashboard = function(req, res) {

	if(req.user){
		if(req.user.role == "Admin"){ //temporary
			res.render('admin', { 
				title: 'Bucket Lister'
			});
		}else{
			res.render('index', { 
				title: 'Bucket Lister'
			});
		}
	}else{
		res.render('signin', { 
			title: 'Sign-in Form', 
			messages: ['Opps please sign in first'],
		});
	}
	
};