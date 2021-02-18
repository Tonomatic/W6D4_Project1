const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let expected1 = true
    //Act
    let five = isFive(5)
    //Assert
    expect(five).to.equal(expected1)
    // expect.fail('Remove this expect.fail and replace it with your test');

    //Arrange
    let expected2 = false

    //Act
    let four = isFive(4)
    //Assert
    expect(four).to.equal(expected2)
     // expect.fail('Remove this expect.fail and replace it with your test');

  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let expected1 = true
    //Act
    let odd = isOdd(3)
    //Assert
    expect(odd).to.equal(expected1)

  });
  it("should return false if the num is even", () => {
    //Arrange
    let expected2 = false
    //Act
    let even = isOdd(2)
    //Assert
    expect(even).to.equal(expected2)

  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let expected = Error
    //Act
    let error = function() {
      return isOdd('string');
    }
    //Assert
    expect(error).to.throw(expected)

  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let expected = [1,2,3,4,5]
      //Act
      let value = myRange(1,5)
      // Assert
      expect(value).to.eql(expected);

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let expected = [2,4,6,8,10]
      //Act
      let value = myRange(2,10,2)
      // Assert
      expect(value).to.eql(expected);
    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let expected = Error;
    //Act
    let error = function() {
      return myRange(undefined, 'string')
    }
    //Assert
    expect(error).to.throw(expected)

  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange
    let expected = RangeError
    //Act
    let error = function() { return fizzBuzz(-1) }
    //Assert
    expect(error).to.throw(expected)

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange
    let expected = TypeError
    //Act
    let error = function () { return fizzBuzz('string') }
    //Assert
    expect(error).to.throw(expected)

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange
    let expected = [3, 5, 6, 9];
    //Act
    let value = fizzBuzz(10)
    //Assert
    expect(value).to.eql(expected)

  })
})
