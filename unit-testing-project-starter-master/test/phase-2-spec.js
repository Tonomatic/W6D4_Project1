const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    //Arrange
    let expected = [1,2,3,3,2,1];
    //Act
    let value = mirrorArray([1,2,3]);
    //Assert
    expect(value).to.eql(expected);
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {

  it('should return a function that will increment the counter when invoked', function () {
    //Arrange
    let expected = 3
    //Act
    let increment = hiddenCounter();
    let ticker = function () {
      increment();
      increment();
      return increment();

    }
    //Assert
    expect(ticker()).to.equal(expected)
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
    //Arrange
   let expected = [2,4,6,8]
   let callback = function(el) {
     return el * 2;
   }
    //Act
   let value = myMap([1,2,3,4], callback)
    //Assert
   expect(value).to.eql(expected)
  });

  it("should not call the built in Array#map", function () {
     //Arrange
    let mapArray = [1,2,3,4]
    let mapSpy = chai.spy.on(mapArray, "map")
    let callback = function(el) {
     return el * 2;
     }
    //Act
    myMap(mapArray, callback)
    //Assert
    expect(mapSpy).to.not.have.been.called();
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
     //Arrange
    let expected = 5
    //Act
    let value = avgValue([10, 5, 0])
    //Assert
    expect(value).to.equal(expected)
  })
})
