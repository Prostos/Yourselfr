var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tools = require('./../tools.js');

var Posts = mongoose.model('posts');
var Users = mongoose.model('users');
var Likes = mongoose.model('likes');

//	User page generator.
// api/users/:alias
router.get('/:alias', function(req, res){
	var alias = req.params.alias;

	//Check if user exists, if yes load, if no redirect 404.
	var Users = mongoose.model('users');
	Users.findOne({alias: new RegExp('^'+alias+'$', "i")}).select('username alias status social profileType stats photo header online').exec(function(err, user){
		if(err) throw err;
		if(user == null){
			res.send({status: "404"});
		} else {
			console.log(user);
			// Online manager
			if(user._id == req.session.passport.user){
				user.online.status = true;
				user.online.time = new Date();
			} else {
				var date = new Date(user.online.time);
				var now =  new Date();

				var timePast = Math.floor((now - date) / 1000 / 60);
				if(timePast > 6){
					user.online.status = false;
				}
			}


			// User visits manager
			user.stats.visits += 1;
			user.save();

			res.send(user);
		}
	});
});

// Change user's data!
router.post('', function(req, res){
	
	update = {
		username: req.body.username,
		alias: req.body.alias,
		status: req.body.status ? req.body.status : "",
		profileType: req.body.profileType,
		social: {
			vk: req.body.vk,
			twitter: req.body.twitter,
			tumblr: req.body.tumblr,
			instagram: req.body.instagram,
			askfm: req.body.askfm
		}
	}

	if(!update.username) delete update.username;
	else {
		if(update.username.length > 20){
			return res.send({message: "Вы выбрали слишком длинное имя!"});
		} else if(update.username.length == 0){
			return res.send({message: "Имя не может быть пустым."});
		}
		if(update.status.length > 299){
			return res.send({message: "Нельзя писать о себе так много!"});
		}
	}

	if(!update.alias){
		delete update.alias;
		delete update.status;
	} else {
		if(!update.status) update.status = "";
	}

	if(!update.profileType) delete update.profileType;
	if(!update.social.vk) delete update.social.vk;
	if(!update.social.twitter) delete update.social.twitter;
	if(!update.social.tumblr) delete update.social.tumblr;
	if(!update.social.instagram) delete update.social.instagram;
	if(!update.social.askfm) delete update.social.askfm;

	if(tools.isEmpty(update.social) && update.alias) delete update.social;
	//Alias check!
	if(update.alias){
		// if we have update alias we can say we 
		

		if(update.alias.length > 32){ // Check alias's length
			return res.send({message: "Адрес страницы слишком длинный"});
		}
		if(!goodAlias(update.alias)){ // Check if alias is valid
			return res.send({message: "Адрес страницы состоит из недопустимых символов"});
		}
		if(bannedAlias(update.alias)){
			return res.send({message: "Извините, но, к сожалению, выбрать такой адрес страницы нельзя!"});
		}
		console.log(bannedAlias(update.alias));

		Users.findOne({alias: update.alias}, function(err, user){
			if(err) throw err;
			// It means that there's no user with this alias.
			if(!user){
				updateData();
			} else {
				// This alias may belonged to our user OR other user
				if(user._id == req.session.passport.user){
					updateData();
				} else {
					res.send({message: "Пользователь с таким адресом уже есть. Выберите другой!"});
				}
			}
		});
	} else {
		updateData();
	}
	

	function updateData(){
		console.log("Start updating data.");
		var id = req.session.passport.user;
		Users.findOneAndUpdate({_id: id}, update, function(err, doc){
			if (err) return res.send(500, { error: err });
			console.log(doc);
			return res.send({status:1, message: "Данные успешно обновлены."});
		});
	}

	function goodAlias(alias){
		var regex = new RegExp(/^[a-z1 \d_]{1,32}$/g);
		if (regex.test(alias)){
			return true;
		} else {
			return false;
		}
	}

	function bannedAlias(alias){
		var alias = alias.toString().toLowerCase();
		var banned = ['404', 'admin', 'preferences', 'signup', 'yourselfr', 'blocked'];
		for (var i=0; i<banned.length;i++){
			if(banned[i] == alias){
				return true;
			}
		}
		return false;
	}
});


// Change password
var bCrypt = require('bcrypt-nodejs');
router.post('/change_password', function(req, res){
	var oldPassword = req.body.oldPassword;
	var newPassword = req.body.newPassword;

	if(!oldPassword || !newPassword){
		return res.send({message: "Вы забыли прислать один из паролей"});
	}

	if(oldPassword == newPassword){
		return res.send({message: "Старый и новый пароли должны отличаться друг от друга"});
	}


	var id = req.session.passport.user;
	Users.findById(id, function(err, user){
		if(err) throw err;
		if (user) {
			// 
			// Continue this.
			//
		};
	});
});

module.exports = router;