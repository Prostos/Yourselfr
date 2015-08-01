var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tools = require('./../tools.js');
var async = require('async');

var Posts = mongoose.model('posts');
var Users = mongoose.model('users');
var Likes = mongoose.model('likes');
var Subscriptions = mongoose.model('subscriptions');


// api/posts
router.get('', function(req, res){
	var alias = req.query.alias ? req.query.alias.toLowerCase() : undefined;
	var type  = req.query.type;
	var offset = req.query.offset ? req.query.offset : 0; // Load more function


	if(!alias){
		if(!type){
			res.send({message: "Empty request."});
		} else {
			type = type.toLowerCase();
			if(type == 'moderation'){
				var user_ids = req.session.passport.user;
				Posts.find({created_by: user_ids, type: 2}).sort({_id: -1}).exec(function(err, posts){
					return res.send(posts);
				});
			}
		}
	} else {
		Users.findOne({alias: alias}, function(err, user){
			if(!user) {
				res.send({message: "User is not found"});
			} else {
				var user_id = user._id;
				Posts.find({created_by: user_id, type: 1}).sort({_id: -1}).skip(offset).limit(15).exec(function(err, posts){
					res.send(posts);
				});
			}
		});
	}
});
// api/posts/feed

router.get('/feed', function(req, res){

	var id = req.session.passport.user;

	Subscriptions.find({follower: id}, function(err, subscriptions){


		if(!subscriptions){
			return res.send({status: 0});
		}
		var subsArr = [];
		subscriptions.forEach(function(subscription){
			subsArr.push(subscription.following);
		});
			
		Posts.find({created_by: { $in : subsArr}}).limit(15).lean().sort({_id: -1}).exec(function(err, posts){
			

			if(tools.isEmpty(posts)){
				return res.send({status:0});
			}

			var postsArr = [];
			posts.forEach(function(post, i){
				postsArr.push(post.created_by);
			});
			Users.find({_id: { $in : postsArr}}).select('photo online alias username').lean().exec(function(err, users){
				posts.forEach(function(post, i){
					users.forEach(function(user, e){
						if(post.created_by == user._id){
							posts[i].user = user;
						}
					});
				})
				
				// console.log(posts);
				res.send({posts:posts});
			});
			// async.waterfall([
			// 	function(callback){
			// 		posts.forEach(function(post, i){
			// 			Users.findById(post.created_by).select('photo online alias username').exec(function(err, user){
			// 				posts[i].user = user;


			// 				// ПЕРЕДЕЛАТЬ ВСЁ НАХУЙ, ПОТОМУ ЧТО ГОВНОКОД.
			// 				if(i == posts.length-1){
			// 					callback(null);
			// 				}
			// 			});
			// 		});

			// 	}
			// ], function(err){
			// 	if(err) throw err;
			// 	console.log(posts);
			// 	res.send({posts:posts});
			// });
		});
	});
});


//
// Publish a post.
// api/posts
router.post('', function(req, res){
	var alias = req.body.created_by;
	if(!alias) res.send({message: "Empty alias"});
	else {
		Users.findOne({alias: alias}, function(err, user){
			if(err) throw err;
			if(!user){
				res.send({message: "User not found."});
			} else {
				var newPost = new Posts();
		
				if(!req.body.text || req.body.text == ''){
					res.send({message: ""});
				} else if(req.body.text.length > 300){
					res.send({message: "Максимальная длина поста — 299 символов"});
				} else {
					// Check user profile type
					// If 1 send to wall.
					// If 2 send to moderating

					if(user.profileType == 2){
						newPost.type = 2;
						user.stats.unpublishedPosts += 1;
						user.save();
					} else {
						newPost.type = 1;
					}
					newPost.text = req.body.text;
					newPost.created_by = user._id;
					newPost.save(function(err){
						if(err) throw err;

						var message = (user.profileType == 1) ? "Опубликовано" : "Запись появится в блоге, как только "+ user.username + " её одобрит.";
						res.send({status: 1, message: message});
						tools.countUserPosts(user._id);
					});
				}
			}
		});
	}
});

// api/posts/:id
router.delete('/:id', function(req, res){
	// Here i check if the post creator's id and user ids are ==
	var id = req.params.id; // Post id.
	

	if(!id){
		return res.send({message: "No parametrs sent"});
	}
	var user_ids = req.session.passport.user; // User ids.


	Posts.findById(id, function(err, post){
		if(!err){
			if(!post){
				return res.send({message: "Такой пост не найден, возможно, он уже был удалён."});
			}

			if(post.created_by == user_ids){
				Posts.remove({_id: id}, function(err){
					if(err) throw err;

					removeLikesOnPost(id);
					Users.findById(user_ids, function(err, user){
						if(err) throw err;
						user.stats.posts = user.stats.posts - 1;

						if(post.type == 2){
							user.stats.unpublishedPosts -= 1;
						}

						user.save();
						res.send({message: "This post was removed"});
					});

				});
			} else {
				res.send({message: "You are going to delete post which is not yours! Go away!"});
			}
		}

		function removeLikesOnPost(id){
			Likes.remove({object: id}, function(err){
				if(err) throw err;

				// Likes were removed.
			});
		}
	});
});
router.post('/moderation', function(req, res){
	var action = req.body.action;
	var id = req.body.id;

	console.log(action, id);
	if(!action || !id){
		console.log(id);
		console.log(action);
		res.send({message: 'empty query'});
	} else {
		Posts.findById(id, function(err, post){
			if(err) throw err;
			if(post){
				Users.findById(post.created_by, function(err, user){
					if (err) throw err;
					if(user){
						if(user._id == req.session.passport.user){
							startModeration();
						} else {
							return res.send({message: "Пост который вы трогаете, вам, собственно, не принадлежит!"});
						}
					} else {
						return res.send({message:"Серверная ошибка!!"});
					}

					function startModeration(){
						if(action == 'accept'){
							post.type = 1;
							user.stats.unpublishedPosts -= 1;

							console.log(user.stats.unpublishedPosts);
							post.save();
							user.save();
							res.send({status: 1, message: "Опубликовано"});
						} else if (action == 'remove'){
							Posts.findByIdAndRemove(id, function(err){
								if(err) throw err;
								res.send({status: 0, message: "Удалено"});
							});
						} else {
							res.send({message: 'wrong action'});
						}
					}
				});
			}
			
		});
	}
});
// Get a random post
router.get('/random', function(req, res){
	console.log("random was called");
	Posts.findOne({}).sort({_id: -1}).exec(function(err, post){
		if(err) throw err;
		Users.findById(post.created_by, function(err, author){
			if(err) throw err;
			if(author){
				var responsePost = {
					owner_alias: author.alias,
					owner_username: author.username,
					text: post.text,
					created_at: post.created_at,
					likes: post.likes,
					_id: post._id
				};
				console.log(responsePost);

				res.send(responsePost);
			}
		});
	});
});

module.exports = router;