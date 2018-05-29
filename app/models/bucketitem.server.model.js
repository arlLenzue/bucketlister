var mongoose = require('mongoose'), 
	Schema = mongoose.Schema; 

var BucketItem = new Schema({
	creator: {
		type: Schema.Types.ObjectId, 
		ref: 'User'
	},
	title: String,
	description: String,
	addedby: [{
		type: Schema.Types.ObjectId, 
		ref: 'User'
	}],
	category: [{
		type: String, 
		enum: ['Adventure', 'Career', 'Community', 
		'Creativity', 'Drama', 'Entertainment', 
		'Extreme', 'Family', 'Finances',
		'Friends', 'Fun', 'Health', 
		'Hobbies', 'Home', 'Education',
		'Literature', 'Love', 'Marriage',
		'Money', 'Music', 'Personal', 
		'Relationships', 'Self-improvement', 'Spiritual Life',
		'Sports', 'Time of Year', 'Travel']
	}],
	completedby: [{
		type: Schema.Types.ObjectId, 
		ref: 'User'
	}],
	created: { 
		type: Date, 
		default: Date.now 
	}
}); 


mongoose.model('BucketItem', BucketItem);