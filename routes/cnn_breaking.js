var express = require('express');
var router = express.Router();
var twitterAuth = require('../lib/web_services/twitter_api');

router.get('/', function(req, res, next) {

  var twitterHandle = 'cnnbrk'

  twitterAuth.get(twitterHandle, 10, function(result){
 
  	if(result.status.code === 200){
	  	res.render('index', { 
	  		handle: twitterHandle, 
	  		tweets: result.data 
	  	});	
  	} else {
  		console.log(result);
  	  	res.render('error', { 
  	  		handle: twitterHandle,
	  		status: result.status.code, 
	  		message: result.status.reason 
	  	});			
  	}

  });

});

module.exports = router;