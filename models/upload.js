// Requiring node modules
var express = require("express");
var mongoose = require('mongoose');
var router = express.Router();

var fs = require('fs');
var busboy = require('connect-busboy');
var Users = mongoose.model('users');

router.use(busboy()); 
//...

var lwip = require('lwip'); // Special module for image resize.

router.post('/avatar', function(req, res) {
	var fstream;
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename) {
		console.log(file);
		console.log("Uploading: " + filename); 

		

		var regex = new RegExp(/^(.*)\./);
		var filename = filename.toString().replace(regex, req.session.passport.user + ".");
		var path = 'public/upload/avatar/'+ filename;

		fstream = fs.createWriteStream(path);
		file.pipe(fstream);
		fstream.on('close', function () {
			lwip.open(path, function(err, image){
				if(err) throw err;
				// image.resize(...), etc.
				image.scale(0.7, function(err, image){
					image.toBuffer('jpg', {quality: 70}, function(err, buffer){
						image.writeFile(path, function(er){
							finish();
						});
					});
				});
			});


		});

		var finish = function(){
			Users.findById(req.session.passport.user, function(err, user){
				user.photo = filename;
				console.log(user);
				user.save();
				res.send({status:1, message:"Ваш аватар был успешно загружен!"});
			});
		}
	});
});

// Avatar removing method
router.post('/avatar/delete', function(req, res){
	console.log("avatar deleting");
	Users.findById(req.session.passport.user, function(err, user){
		if(err) throw err;
		if(user){
			if(user.photo == 'nophoto.png'){
				res.send({status:1, message:"Аватар удалён."});
			} else {
				console.log("else");
				user.photo = 'nophoto.png';
				user.save();
				res.send({status:1, message:"Аватар удалён."});
			}
		}
	});
});

router.post('/header', function(req, res) {
	var fstream;
	req.pipe(req.busboy);
	req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
		console.log("Uploading: " + filename); 

		console.log(mimetype);

		var regex = new RegExp(/^(.*)\./);
		var filename = filename.toString().replace(regex, req.session.passport.user + ".");
		
		var path = 'public/upload/header/'+filename;

		fstream = fs.createWriteStream(path);
		file.pipe(fstream);
		fstream.on('close', function () {
			lwip.open(path, function(err, image){
				if (err) throw err;
				image.scale(0.7, function(err, image){
					image.writeFile(path, 'jpg', function(er){
						finish();
					});
				});
			});

			var finish = function(){
				Users.findById(req.session.passport.user, function(err, user){
					user.header = filename;
					user.save();
					res.send({status:1, message:"Шапка Вашего профиля была загружена."});
				});
				console.log("File uploaded!");
			}
		});
	});
});

// Header removing method
router.post('/header/delete', function(req, res){
	Users.findById(req.session.passport.user, function(err, user){
		if(err) throw err;
		if(user){
			if(user.header == 'noheader.png'){
				res.send({status:1, message:"Шапка профиля удалена."});
			} else {
				user.header = 'noheader.png';
				user.save();
				res.send({status:1, message:"Шапка профиля удалена."});
			}
		}
	});
});

module.exports = router;