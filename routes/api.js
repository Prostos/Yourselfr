// Requiring node modules
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var tools = require('../models/tools.js');

// Requiring classes
var classUsers = require('../models/api/classUsers.js');
var classPosts = require('../models/api/classPosts.js');
var classLikes = require('../models/api/classLikes.js');
var classSubscriptions = require('../models/api/classSubscriptions.js');
var classStatistics = require('../models/api/classStatistics.js');
var classControl = require('../models/api/classControl.js');


// Count visit site
var Stats = mongoose.model('stats');
router.use(function(req, res, next){
	Stats.findOneAndUpdate({}, {$inc: {"coverage.visits": 1} }, function(err, resp){
		if(err) throw err;
	});

	next();
});

router.use('/users', classUsers);
router.use('/posts', classPosts);
router.use('/likes', classLikes);
router.use('/subscriptions', classSubscriptions);
router.use('/statistics', classStatistics);
router.use('/control', classControl);
router.use('/:method', function(req, res){
	var method = req.params.method;
	res.send({message: "Method '"+method+"' is not defined!"});
});

module.exports = router;