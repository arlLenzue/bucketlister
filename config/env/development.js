module.exports = { 
	db: process.env.MONGODB_URI || 'mongodb://localhost/bucketlist',
	sessionSecret: 'developmentSessionSecret',
	facebook: { 
		clientID: process.env.ClientID || 'sampleID', 
		clientSecret: process.env.ClientSecret || 'sampleSecret',
		callbackURL: 'http://localhost:5000/oauth/facebook/callback' 
	}

};