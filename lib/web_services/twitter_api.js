/*jslint node: true */
'use strict';

/**
 * This contains all the REQUIRED RESTful functions required to interact with a twitter timeline
 * @class twitter_api
 * @constructor
 */

var OAuth = require('oauth');
var validator = require('../utils/validator');

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  'C1NqtIgVd5PMWYDzLcZ5ooFRI',
  'eiMBPPcmhHNZXjvq1tpHvMZpBDs3bfOLzun7elJ26zZN2o7kVK',
  '1.0A',
  null,
  'HMAC-SHA1'
);


exports.get = function(handle, limit, callback) {

	var result = {
		data: null,
		status: {
			code: 404,
			reason: ''
		}
	};

	if(validator.isString(handle) && validator.isInt(limit)){

		oauth.get(
		  'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+handle+'&count='+limit,
		  '43874603-mInbC6jKs5SK6Fai2kqmtnLz6ki30Bu3hCnXadgCq',
		  'CZ4vtlQYwqCBCBctiYcohh97fScrWzKR2p5eoZBVTeVC5',   
		  function (e, data, res){

		 	if(e) {
		 		var errorData = JSON.parse(e.data);

		 		result.status.code = e.statusCode;
		 		result.status.reason = '[twitter_api: get] '+errorData.errors[0].message;
		 		callback(result);

		 	} else {

		  		data = JSON.parse(data);

		 		for (var i = 0; i < data.length; i++) {
		  			var originalText = data[i].text;
		  			var matchResult = originalText.match(/(((https?:\/\/)|(www\.))[^\s]+)/g);
					if(!validator.isEmpty(matchResult)){
						for (var j = 0; j < matchResult.length; j++) {
							data[i].text = data[i].text.replace(matchResult[j],'<a href='+matchResult[j]+'>'+matchResult[j]+'</a>');
						}
					}
				}
				result.status.code = 200;
				result.data = data;	
		 	}

			callback(result);	       
		  }
		);	

	} else {
		result.status.code = 500;
		result.status.reason = '[twitter_api: get] Parameter types do not match those expected';
		callback(result);
	}

};