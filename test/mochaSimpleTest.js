
//require Node.js's built-in assert module
var assert = require('assert');

//describe groups our Mocha tests
	//accepts
		//> name of test group
		//> a callback func
	//can be nested as deeply as we want
describe('Array', function() {
	describe('#indexOf()', function() {
		//it denotes one individual test case
			//accepts
				//> string explaining what the test should do
				//> callback func (actual test)
		it('should return -1 when the value is not present', function() {
			//checks for the index 4 in an array with length 3
			//assert.equal accepts 2 args that must be equivalent to pass
				//> actual
				//> expected
			assert.equal([1,2,3].indexOf(4), -1);
		});
	});
	//Works without being grouped.
	it('double done', function(done) {
		// Calling `done()` twice is an error
		setImmediate(done);//This line will show up as a passed test.
		setImmediate(done);//This line will show up as  failed test.
	});
});


