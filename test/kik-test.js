let assert = require('assert');


describe('TEST', function() {
  	describe('All platforms', function() {
    	it('kik example', function() {
    		
    		let jsonKik = {'hola': 'mundo'};

    		assert.equal(jsonKik, kik.translateToSystem());
      		// assert.equal(-1, [1,2,3].indexOf(4));
    	});
    });
});