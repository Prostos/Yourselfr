var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tools = require('./../tools.js');

var Posts = mongoose.model('posts');
var Users = mongoose.model('users');
var Likes = mongoose.model('likes');

// api/likes
router.post('', function(req, res){
	var object = req.body.object;
	var created_by = req.session.like;
	if(!object){
		return res.send({message: "Empty query"});
	}
	if(!created_by){
		var created_by = tools.randNumber(100000000, 999999999);
		req.session.like = created_by;
	}
	Posts.findById(object, function(err, post){
		Likes.findOne({object: object, created_by: created_by}, function(err, like){

			if(err) throw err;

			var status;
			console.log(like);
			if(like){
				Likes.remove({object: object, created_by: created_by}, function(err, result){});

				if(post.likes > 0){
					post.likes -= 1;
				} else {
					post.likes = 0;
				}
				status = 0;
			} else {
				var newLike = new Likes();
				newLike.object = object;
				newLike.created_by = created_by;
				newLike.save(function(err){
					if(err) throw err;
				});

				status = 1;
				post.likes += 1;
			}
			post.save();
			res.send({status: status, now: post.likes});
		});
	});
	// Likes.find({object: object, created_by: created_by}, function(err, like){
	// 	if(err) throw err;
	// 	if(like){
	// 		Likes.remove({object: object, created_by: created_by}, function(err, result){

	// 		});
	// 	} else {
	// 		
	// 	}
	// });
});

// api/likes/:id
router.get('/:id', function(req, res){
	var id = req.params.id;

	Likes.find({object: id}, function(err, likes){
		res.send(likes);
	});
});

module.exports = router;