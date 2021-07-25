var expect = require('chai').expect;
var calc = require('./../main.js');

describe('Calculator', function() {

  describe('Smoke tests', function() {

    it('should exist the calc lib', function() {
      expect(calc).to.exist;
    });

    it('should exist the method `sum`', function() {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`', function() {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`', function() {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`', function() {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    });

  });


  describe('Sum', function() {
    it('should return the sum of two numbers', function() {
      expect(calc.sum(1, 2)).to.equal(3);
    });
  });

  describe('Sub', function() {
    it('should return the sub of two numbers', function() {
      expect(calc.sub(6, 2)).to.equal(4);
    });
  });

  describe('Mult', function() {
    it('should return the mult of two numbers', function() {
      expect(calc.mult(6, 2)).to.equal(12);
    });
  });

  describe('Div', function() {
    it('should return the div of two numbers', function() {
      expect(calc.div(6, 2)).to.equal(3);
    });
  });

});
