var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tools = require('./../tools.js');

var Users = mongoose.model('users');
var Subscriptions = mongoose.model('subscriptions');


router.post('/follow', function(req, res){
	if(!req.isAuthenticated()){
		return res.send({status: -1, message:"Чтобы подписаться на этого пользователя, вы должны зарегистрироваться."});
	}

	var follower = req.session.passport.user;
	var following = req.body.following;


	if(!following){
		return res.send({status:0, message:"Вы не выбрали объект подписки."});
	}

	var subs = {
		follower: follower,
		following: following
	}
	
	Users.findById(following, function(err, user){
		if(err) throw err;
		if(!user){
			return res.send({status:0, message:"Пользователя, на которого Вы хотите подписаться, не существует."});
		} else {
			subscribe();
		}
	});
	function subscribe(){
		Subscriptions.findOne(subs, function(err, subscription){
			if(!err){
				// There is a subscription between follower and following
				if(subscription){
					// Delete this subscription
					Subscriptions.remove(subs, function(err){
						if(err) throw err;

						// Decrementing the value of followers of user
						updateFollowers(false);

						return res.send({status:2, message:"Подписка успешно отменена"});
					});
				} else {
					var newSubcription = new Subscriptions({
						follower: follower,
						following: following
					});
					newSubcription.save(function(err){
						// Incrementing the value of followers
						updateFollowers(true);

						return res.send({status:1 ,message:"Подписка успешно оформлена"});
					});
				}
			}
		});
	}
	function updateFollowers(index){
		// true - increment
		// false - decrement
		if (index == true){
			var increment = 1;
		} else if(index == false){
			var increment = -1;
		}
		Users.findById(following, function(err, user){
			if(user.stats.followers == 0 && increment == -1){
				user.stats.followers = 0;
			} else {
				user.stats.followers = user.stats.followers + increment;
			}
			
			console.log(user.stats.followers);
			user.save();
		});
		Users.findById(follower, function(err, user){
			if(user.stats.following <= 0 && increment == -1){
				user.stats.following = 0;
			} else {
				user.stats.following = user.stats.following + increment;
			}
			
			user.save();
		});
	}
});

router.get('/status/:following', function(req, res){
	var follower = req.session.passport.user;
	var following = req.params.following; // Alias
	if(!following || !follower){
		return res.send({message: "Невозможно получить статус, так как один из операндов недоступен."});
	}
	if(follower == following){
		return res.send({message:"Подписчик и подписка –– одни и те же люди."})
	}

	console.log("FOLLOWER: "+follower);
	console.log("FOLLOWING: "+following);

	Users.findOne({alias: new RegExp('^'+following+'$', "i")}, function(err, user){
		if(user){
			var userid = user._id;
			var searchObj = {
				follower: follower,
				following: userid
			}
			getStatus(searchObj);
		}
	});
	var getStatus = function(searchObj){
		Subscriptions.findOne(searchObj, function(err, subscription){
			if(err) throw err;
			var status;
			if(subscription){
				status = true;
			} else {
				status = false;
			}
			res.send({status: status});
		});
	}
	
});

router.get('/followers', function(req, res){
	var alias = req.query.alias ? req.query.alias.toLowerCase() : undefined;

	if(!alias){
		return res.send({message: "no alias"});
	}
	// Find a man, whoose followers we gonna find
	var User = Users.findOne({alias: alias}).select('username alias');
	User.exec(function(err, user){
		if(err) throw err;
		if(user){
			var following = user._id;
			var query = Subscriptions.find({following: following}).select('follower');

			query.exec(function(err, subscriptions){
				if(tools.isEmpty(subscriptions)){
					return res.send({status:2, user:user});
				}

				var followersArr = [];
				for(var i=0; i<subscriptions.length; i++){
					followersArr.push(subscriptions[i].follower);
				}

				var secondQuery = Users.find({ _id : { $in: followersArr } }).select({username:1, alias:1, photo:1, status:1, 'online.status':1});

				secondQuery.exec(function(err, followers){
					console.log(followers);
					res.send({status:1, user:user, followers:followers });
				});
			});
		} else {
			return res.send({status:0});
		}
	});
});


router.get('/following', function(req, res){
	var alias = req.query.alias.toLowerCase();
	// Find a man, whoose followers we gonna find
	var User = Users.findOne({alias: alias}).select('username alias');
	User.exec(function(err, user){
		if(err) throw err;
		if(user){
			var follower = user._id;
			var query = Subscriptions.find({follower: follower}).select('following');

			query.exec(function(err, subscriptions){
				if(tools.isEmpty(subscriptions)){
					return res.send({status:2, user:user});
				}

				var followingsArr = [];
				for(var i=0; i<subscriptions.length; i++){
					followingsArr.push(subscriptions[i].following);
				}

				var secondQuery = Users.find({ _id : { $in: followingsArr } }).select({username:1, alias:1, photo:1, status:1, 'online.status':1});

				secondQuery.exec(function(err, followings){
					console.log(followings);
					res.send({status:1, user:user, followings:followings });
				});
			});
		} else {
			return res.send({status:0});
		}
	});
});


module.exports = router;