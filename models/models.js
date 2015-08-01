var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	alias: String,
	email: String,
	password: String,
	about: String,
	status: String,
	photo: {type: String, default: 'nophoto.png'},
	header: {type: String, default: 'noheader.png'},
	social: {
		vk: {type: String, default: ''},
		twitter: {type: String, default: ''},
		tumblr: {type: String, default: ''},
		instagram: {type: String, default: ''},
		askfm: {type: String, default: ''}
	},
	created_at: {type: Date, default: Date.now},
	profileType: {type: Number, default: 1}, // 1 — Open. 2 — Moderating.
	stats: {
		posts: {type: Number, default: 0},
		likes: {type: Number, default: 0},
		followers: {type: Number, default: 0},
		following: {type: Number, default: 0},
		visits: {type: Number, default: 0},
		unpublishedPosts: {type: Number, default: 0}
	},
	online: {
		status: Boolean,
		time: Date
	}
});

var postSchema = new mongoose.Schema({
	text: String,
	type: {type: Number, default: 1},
	created_by: String,
	created_at: {type: Date, default: Date.now},
	likes: {type: Number, default: 0}
});

var likeSchema = new mongoose.Schema({
	object: String,
	created_by: String,
	created_at: {type: Date, default: Date.now}
});

var subscriptionsSchema = new mongoose.Schema({
	follower: String,
	following: String
});

var statSchema = new mongoose.Schema({
	coverage: {
		visits: {type: Number, default: 0},
		likes:  {type: Number, default: 0},
		posts:  {type: Number, default: 0}
	}
	
});

mongoose.model("users", userSchema);
mongoose.model("posts", postSchema);
mongoose.model("likes", likeSchema);
mongoose.model("stats", statSchema);
mongoose.model("subscriptions", subscriptionsSchema);