const chai = require("chai");
const { interface } = require("chai-spies");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { returnsThree, reciprocal } = require("../problems/number-fun.js");

describe("returnsThree", function () {
    it("should return three", function () {
        let expected = 3;
        let value = returnsThree()
        expect(value).to.equal(expected);
    })


})

describe("reciprocal", function () {

    context("When the number is greater than 1 million or less than 1", function () {
        it("should throw a type Error", function () {
            let expected = TypeError;
            let value1 = function () { return reciprocal(2000000) }
            let value2 = function () { return reciprocal(0.02) }

            expect(value1).to.throw(expected)
            expect(value2).to.throw(expected)

        })
    })

    context("When the number is between 1 and a million", function () {
        it("should return the reciprocal of the number", function () {
            let expected1 = 1 / 3;
            let expected2 = 1 / 35;

            let value1 = reciprocal(3)
            let value2 = reciprocal(35)
            expect(value1).to.equal(expected1);
            expect(value2).to.equal(expected2);

        })
    })

})
