// Requiring node modules
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Requiring classes
var Posts = mongoose.model('posts');
var Users = mongoose.model('users');
var Likes = mongoose.model('likes');

module.exports = {
	isEmpty: function(obj){
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		// null and undefined are "empty"
		if (obj == null) return true;
		// Assume if it has a length property with a non-zero value
		// that that property is correct.
		if (obj.length > 0)    return false;
		if (obj.length === 0)  return true;
		// Otherwise, does it have any properties of its own?
		// Note that this doesn't handle
		// toString and valueOf enumeration bugs in IE < 9
		for (var key in obj) {
		    if (hasOwnProperty.call(obj, key)) return false;
		}
		return true;
	},
	randNumber: function(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	countUserPosts: function(_id){
		Posts.count({created_by: _id}, function(err, posts){
			if(!err){
				Users.findById(_id, function(err, user){
					if(!err){
						user.stats.posts = posts;
						user.save();
						return posts;
					}
				});
			}
		})
	}
}