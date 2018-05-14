var mongoose = require('mongoose'), 

Schema = mongoose.Schema; 

var UserSchema = new Schema({ 
	firstName: String,
	lastName: String, 
	role: { 
		type: String, 
		enum: ['Admin', 'User'],
		default: "User"
	},
	email: {
		type: String,
		match: [/.+\@.+\..+/, "Please fill a valid e-mail address"] 
	}, 
	username: {
		type: String, 
		unique: true, 
		required: 'Username is required', 
		trim: true 
	}, 
	password: {
		type: String,
		validate: [ 
			function(password) { 
				return password.length >= 6; 
			}, 'Password should be at least 6 characters'
		]
	},
	created: { 
		type: Date, 
		default: Date.now 
	}
}); 

UserSchema.virtual('fullName').get(function() { 
	return this.firstName + ' ' + this.lastName; 
}).set(function(fullName) { 
	var splitName = fullName.split(' '); 
	this.firstName = splitName[0] || ''; this.lastName = splitName[1] || '';
}); 

UserSchema.methods.authenticate = function(password) { return this.password === password; };

UserSchema.set('toJSON', { virtuals: true });

mongoose.model('User', UserSchema);