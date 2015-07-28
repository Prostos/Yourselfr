var express = require('express');
var fs = require('fs');
var path = require('path');

var mongojs = require('mongojs');
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

var authenticate = require('./routes/authenticate')(passport);

mongoose.connect('mongodb://localhost/database');
require("./models/models.js");

var api = require('./routes/api');
var app = express();

var upload = require('./models/upload');

// Define a middleware function to be used for every secured routes
var auth = function(req, res, next){
	if (!req.isAuthenticated()) 
		res.send(401);
	else
		next();
};

//app.use(morgan('dev'));
// app.use(session({
// 	secret: 'keyboard cat',
// 	cookie: {maxAge: 24*60*60*1000},
// 	resave: false,
// 	saveUninitialized: true
// }));
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


app.use(session({
	secret: 'foo',
	resave: false,
	saveUninitialized: true,
	maxAge: new Date(Date.now() + 3600000),
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use(passport.initialize());
app.use(passport.session());




app.use(require('prerender-node'));

app.listen(1337);
console.log("Server is running");

app.use('/api', api);
app.use('/auth', authenticate);
app.use('/upload', upload);
app.use(function(req, res, next) {
	res.status(200);
	res.sendFile(__dirname + '/public/index.html');
});

//Initialize Passport
var initPassport = require('./models/passport-init');
initPassport(passport);

