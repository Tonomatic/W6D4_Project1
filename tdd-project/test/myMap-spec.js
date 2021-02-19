const chai = require("chai");
const { interface } = require("chai-spies");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require('../problems/myMap.js');

describe('myMap function', function () {
 let ourArray;
 let callback = el => el * 2;
  beforeEach("set up an ourArray instance", function() {
    ourArray = [1, 2, 3];
  });
    it('should return an array equal to the passes in array with the callback function called on each of the indices', function () {
        let expected = [2, 4, 6]

        let value = myMap(ourArray, callback)
        expect(value).to.eql(expected);

    })

  it("should not call the built in Array#map", function () {
    let mapSpy = chai.spy.on(ourArray, "map")
    myMap(ourArray, callback)
    expect(mapSpy).to.not.have.been.called();
  });
})