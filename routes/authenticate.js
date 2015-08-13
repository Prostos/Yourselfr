var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

module.exports = function(passport){
	router.get('/', function(req, res){
		if(req.isAuthenticated()){
			var id = req.session.passport.user;
			var Users = mongoose.model('users');
			Users.findById(id).select('username profileType alias').exec(function(err, user){
				if(err) throw err;
				res.send(user);
			});
		} else {
			res.send('0');
		}
	});

	//log in
	router.get('/login', function(req, res){

		if(req.isAuthenticated()){
			res.redirect('/');
			return;
		}
	})

	router.post('/login', passport.authenticate('login', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));

	//sign up
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/auth/success',
		failureRedirect: '/auth/failure'
	}));


	router.get('/vk', passport.authenticate('vkontakte', {
		successRedirect: '/auth/success',
		failureRedirect: '/login',
	}));

	//log out
	router.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});





	//sends successful login state back to angular
	router.get('/success', function(req, res){
		res.status(200);
		res.send({state: 'success', user: req.user ? req.user : null, message: "Вы успешно вошли!"});
	});

	//sends failure login state back to angular
	router.get('/failure', function(req, res){
		res.status(200);
		res.send({state: 'failure', user: null, message: "Неправильный логин или пароль!"});
	});

	router.get('/vk/callback', passport.authenticate('vkontakte', { failureRedirect: '/login' }),
		function(req, res) {
		// Successful authentication, redirect home.
		res.redirect('/');
	});


	return router;
}