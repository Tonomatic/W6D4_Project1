const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  let word;
  beforeEach('setup a word Instance', () => {
    word = new Word('string')
  })

  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act

      //Assert
       expect(word).to.have.property("word")
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
      let expected = 'string'
      //Assert
      expect(word.word).to.equal(expected)
    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      let expected = 'strng'
      //Act
      let value = word.removeVowels()
      //Assert
       expect(value).to.equal(expected)
    })
  })
  describe('removeConsonants function', function () {
  it('should return the word with the consonants removed', function() {
    //Arrange
    let expected = 'i'
    //Act
    let value = word.removeConsonants()
    //Assert
     expect(value).to.equal(expected)
  })
  })
  describe('pigLatin function', function () {

  it('should return the word converted to pig latin', function() {
    //Arrange
    let expected = 'ingstray'
    //Act
    let value = word.pigLatin();
    //Assert
    expect(value).to.equal(expected)

  })
})
})

