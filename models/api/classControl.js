var express = require('express');
var mongoose = require('mongoose');
var async = require('async');
var router = express.Router();
var tools = require('./../tools.js');


var Posts = mongoose.model('posts');
var Users = mongoose.model('users');
var Likes = mongoose.model('likes');
var Stats = mongoose.model('stats');
var Subscriptions = mongoose.model('subscriptions');

// Count class
var Control = function(){
	this.countFollowersAndFollowing = function(){
		Users.find({}, function(err, users){
			for(var i=0;i<users.length; i++){
				// Counting  followers
				var id = users[i];
				Users.findById(id, function(err, user){
					async.parallel([
						function(callback){
							Subscriptions.count({following: user._id}, function(err, count){
								user.stats.followers = count;
								callback(null);
							});
						},
						function(callback){
							Subscriptions.count({follower: user._id}, function(err, count){
								user.stats.following = count;
								callback(null);
							});
						},
					], function(){
						user.save();
					});
				});
			}
			console.log("Followers and following were recounted on " + i + " guys");
		});
	}
	this.userList = function(){
		Users.find({}, function(err, users){
			return users;
		});
	}
	this.countUnpublishedPosts = function(){
		Users.find({profileType : 2}, function(err, users){
			users.forEach(function(cuser, i){
				Users.findById(cuser._id, function(err, user){
					async.parallel([
						function(callback){
							Posts.count({type: 2, created_by: user._id}, function(err, count){
								user.stats.unpublishedPosts = count;
								callback(null);
							});
						}
					], function(){
						user.save();
					});
				});
			});
		});
	}
};

var control = new Control();
control.countUnpublishedPosts();

router.post('', function(req, res){
	var original = '9b317a357323f9639c1c20437d951603';
	var key = req.body.key;

	if(original === key){
		Users.find({}).sort({_id: -1}).exec(function(err, users){
			res.send({status: 1, message: 'Доступ разрешён', users:users});
		});
		
	} else {
		res.send({status: 0, message:"Ошибка доступа"});
	}
	console.log(key);
});


module.exports = router;