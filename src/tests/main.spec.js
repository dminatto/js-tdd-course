import { expect } from "chai";
import * as calc from "./../main.js";

describe("Calculator", () => {
  describe("Smoke tests", () => {
    it("should exist the calc lib", () => {
      expect(calc).to.exist;
    });

    it("should exist the method `sum`", () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a("function");
    });

    it("should exist the method `sub`", () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a("function");
    });

    it("should exist the method `mult`", () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a("function");
    });

    it("should exist the method `div`", () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a("function");
    });
  });

  describe("Sum", () => {
    it("should return the sum of two numbers", () => {
      expect(calc.sum(1, 2)).to.equal(3);
    });
  });

  describe("Sub", () => {
    it("should return the sub of two numbers", () => {
      expect(calc.sub(6, 2)).to.equal(4);
    });
  });

  describe("Mult", () => {
    it("should return the mult of two numbers", () => {
      expect(calc.mult(6, 2)).to.equal(12);
    });
  });

  describe("Div", () => {
    it("should return the div of two numbers", () => {
      expect(calc.div(6, 2)).to.equal(3);
    });

    it("should return 'Is not possible to divide by 0' when div a number by 0", () => {
      expect(calc.div(6, 0)).to.equal("Is not possible to divide by 0");
    });
  });
});
