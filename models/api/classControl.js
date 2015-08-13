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
	this.banUser = function(userID, reason){
		if(!userID || !reason){
			return false;
		}
		Users.findById(userID, function(err, user){
			if (err) throw err;
			if(user){
				user.ban.status = true;
				user.ban.reason = reason;
				user.save(function(err){
					if(err) throw err;
					return true;
				});
			}
		});
	}
	this.unbanUser = function(userID){
		if(!userID){
			return false;
		}
		Users.findById(userID, function(err, user){
			if(err) throw err;
			if(user){
				user.ban.status = false;
				user.ban.reason = "";
				user.save(function(err){
					if(err) throw err;
					return true;
				});
			}
		});
	}

	this.deleteUser = function(userID){
		console.log(userID);
		Users.remove({_id: userID}, function(err){
			if(err) throw err;
			return true;
		});
	}

	this.changePhotoPath = function(){
		Users.find({photo: {$ne : 'nophoto.png'}}, function(err, users){
			console.log(users);
			users.forEach(function(user){
				user.absPathPhoto = 'http://yourselfr.com/upload/avatar' + user.photo;
			});
		});
	}


	this.recountPosts = function(){
		Users.find({}, function(err, users){
			users.forEach(function(user){
				Posts.count({created_by: user._id}, function(err, count){
					user.stats.posts = count;
					user.save();
				});
			});
		});
	}
};

original = '9b317a357323f9639c1c20437d951603';
var control = new Control();

router.post('', function(req, res){
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

router.post('/count-followers-following', function(req, res){
	var key = req.body.key;
	if(key == original){
		control.countFollowersAndFollowing();
		return res.send({message: "Подписчики и подписки всех пользователей пересчитаны."});
	} else {
		return res.send({message: "Security Key is Invalid"});
	}
});

router.post('/count-unpublished-posts', function(req, res){
	var key = req.body.key;
	if(key == original){
		control.countUnpublishedPosts();
		return res.send({message: "Неопобликованные посты всех пользователей пересчитаны."});
	} else {
		return res.send({message: "Security Key is Invalid"});
	}
});

router.post('/recount-posts', function(req, res){
	var key = req.body.key;
	if(key == original){
		control.recountPosts();
		return res.send({message: "Счётчик постов всех пользователей пересчитан."});
	} else {
		return res.send({message: "Security Key is Invalid"});
	}
})

router.post('/ban/user', function(req, res){
	var key = req.body.key;
	var userID = req.body.userID;
	var reason = req.body.reason;

	if(key == original){
		if(control.banUser(userID, reason)){
			return res.send({message: "Пользователь был забанен успешно."});
		} else {
			return res.send({message: "Возникли какие-то трудности при бане пользователя."});
		}
	}
});

router.post('/unban/user', function(req, res){
	var key = req.body.key;
	var userID = req.body.userID;
	if(key = original){
		if(control.unbanUser(userID, reason)){
			return res.send({message: "Пользователь был забанен успешно."});
		} else {
			return res.send({message: "Возникли какие-то трудности при бане пользователя."});
		}
	}
});

router.post('/delete/user', function(req, res){
	var key = req.body.key;
	var userID = req.body.userID;
	if(key = original){
		control.deleteUser(userID);
		return res.send({message: "Пользователь был удалён успешно."});
	}
});

module.exports = router;