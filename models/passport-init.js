var mongoose = require('mongoose');
var User = mongoose.model('users');
var LocalStrategy = require('passport-local').Strategy;
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

	// Passport needs to be able to serialize and deserialize users to support persistent login sessions
	passport.serializeUser(function(user, done) {
		console.log('serializing user:',user.username);
		return done(null, user._id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			console.log('deserializing user:',user.username);
			return done(err, user);
		});
	});

	passport.use('login', new LocalStrategy({
			passReqToCallback : true
		},
		function(req, username, password, done) { 
			// check in mongo if a user with username exists or not
			// ALIAS = LOGIN
			User.findOne({ 'alias' :  username }, 
				function(err, user) {
					// In case of any error, return using the done method
					if (err)
						return done(err);
					// Username does not exist, log the error and redirect back
					if (!user){
						console.log('User Not Found with username '+username);
						return done(null, false);
					}
					// User exists but wrong password, log the error 
					if (!isValidPassword(user, password)){
						console.log('Invalid Password');
						return done(null, false); // redirect back to login page
					}
					// User and password both match, return user from done method
					// which will be treated like success
					return done(null, user);
				}
			);
		}
	));

	passport.use('signup', new LocalStrategy({
			passReqToCallback : true // allows us to pass back the entire request to the callback
		},
		function(req, username, password, done) {
			var email = req.body.email;
			console.log(email);

			if(password.length < 6){
				return done(null, false);
			}
			if(username.length > 25){
				return done(null, false);
			}
			var alias = username.toLowerCase();
			if(!goodAlias(alias)){
				alias = 'id' + Math.floor(Math.random() * 1000000000).toString();
			}

			// find a user in mongo with provided username
			User.findOne({ 'alias' :  username }, function(err, user) {
				// In case of any error, return using the done method
				if (err){
					console.log('Error in SignUp: '+err);
					return done(err);
				}
				// already exists
				if (user) {
					console.log('User already exists with username: '+username);
					return done(null, false);
				} else {
					// if there is no user, create the user
					var newUser = new User();

					// set the user's local credentials
					newUser.username = username;
					newUser.alias = alias;
					newUser.password = createHash(password);
					if(email){
						newUser.email = email;
					}
					

					// save the user
					newUser.save(function(err) {
						if (err){
							console.log('Error in Saving user: '+err);
							throw err;  
						}
						console.log(newUser.username + ' Registration succesful');
						if(email){
							sendRegistrationEmail(email, username, password);
						}
						return done(null, newUser); 
					});
				}
			});
		})
	);
	
	var isValidPassword = function(user, password){
		return bCrypt.compareSync(password, user.password);
	};
	// Generates hash using bCrypt
	var createHash = function(password){
		return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
	};

	var goodAlias = function(alias){
		var regex = new RegExp(/^[a-z1 \d_]{1,32}$/g);
		if (regex.test(alias)){
			return true;
		} else {
			return false;
		}
	};

	var sendRegistrationEmail = function(email, emailLogin, emailPassword){
		var nodemailer = require('nodemailer');

		var emailPassword = emailPassword.substr(0, emailPassword.length -1) + '*';
		// create reusable transporter object using SMTP transport
		var transporter = nodemailer.createTransport({
		    service: 'Gmail',
		    auth: {
		        user: 'yourselfrbot@gmail.com',
		        pass: '9b317a357323f9639c1c20437d951603'
		    }
		});

		var mailOptions = {
		    from: 'Yourselfr Bot <yourselfrbot@gmail.com>', // sender address
		    to: email, // list of receivers
		    subject: 'Успешная Регистрация.', // Subject line
		    text: 'Вы успешно зарегистрировались!', // plaintext body
		    html: 'Спасибо за регистрацию на <a href=\"http://yourselfr.com\">Yourselfr.com</a><br> \
		           Ваши данные: <br> \
		           <b>Логин</b>: '+ emailLogin + '<br>\
		           <b>Пароль</b>: '+ emailPassword + '<br>\
		           <p>С этого момента Вы будете получать уведомления, когда кто-нибудь оставит запись о Вас.</p>\
		           <p>С Любовью, команда Yourselfr.</p>'  // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		    }else{
		        console.log('Message sent: ' + info.response);
		    }
		});
	}

};