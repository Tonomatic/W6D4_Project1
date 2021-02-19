const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const reverseString = require('../problems/reverse-string.js');

describe('Reverse String', function () {
    it('should return a reversed string', function () {
        let string = 'nuf';
        let value = reverseString('fun')
        expect(value).to.equal(string)
    });
    it('should throw error if typeof input is not a string', function () {
        let expected = TypeError;
        let value = function() {return reverseString(1)};
        expect(value).to.throw(expected)
    })

});
