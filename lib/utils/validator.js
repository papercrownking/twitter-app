/*jslint node: true */
'use strict';
var nodeUtils = require('util');

exports.isInt = function(number) {

	var result = false;

	if (number === parseInt(number, 10)){
		result = true;
	} 

	return result;
};


exports.isString = function(string) {

	var result = false;

	if (typeof string === 'string' || string instanceof String){
		result = true;
	}

	return result;
};

exports.isEmpty = function(array) {
	var result = false;
	if(nodeUtils.isArray(array)){
		return (array.length > 0) ? false : true;
	} else {
		return false;
	}
};