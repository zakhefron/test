const assert = require("assert");
const uppercase = require("../index.js");


describe("Suite::uppercase()",function(){
	it("Spec::checks whether upper case works",function(){
		assert.equal(uppercase('hello world'),"HELLO WORLD");
	});	
});

