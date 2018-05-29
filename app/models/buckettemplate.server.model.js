var mongoose = require('mongoose'), 
	Schema = mongoose.Schema; 

var BucketTemplate = new Schema({
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
	bucketitems: [{
		type: Schema.Types.ObjectId, 
		ref: 'BucketItem'
	}],
	created: { 
		type: Date, 
		default: Date.now 
	}
}); 


mongoose.model('BucketTemplate', BucketTemplate);