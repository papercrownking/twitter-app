var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var validator = require('../../lib/utils/validator.js');

describe("Validator module", function() {

	describe("isInt function", function(){

	    it("should return true if integer passed", function () {
	    	var number = 10;
	    	var result = validator.isInt(number);
	    	expect(result).to.be.equal(true);
	    });

	    it("should return true if an integer is not passed", function () {
	    	var string = "hello world";
	    	var result = validator.isInt(string);
	    	expect(result).to.be.equal(false);
	    });

	});


	describe("isString function", function(){
		it("should return true if string passed", function(){
			var string = "hello";
			var result = validator.isString(string);
	    	expect(result).to.be.equal(true);			
		});

		it("should return false if a string is not passed", function(){
			var number = 10;
			var result = validator.isString(number);
	    	expect(result).to.be.equal(false);	
		});
	});

	describe("isEmpty function", function(){
		it("should return false if array with length > 0 passed", function(){
			var array = ["hello"];
			var result = validator.isEmpty(array);
	    	expect(result).to.be.equal(false);			
		});

		it("should return true if array with length === 0 passed", function(){
			var array = [];
			var result = validator.isEmpty(array);
	    	expect(result).to.be.equal(true);	
		});

		it("should return false if a type other than an array is passed", function(){
			var number = 10;
			var result = validator.isEmpty(number);
	    	expect(result).to.be.equal(false);	
		});
	});


});