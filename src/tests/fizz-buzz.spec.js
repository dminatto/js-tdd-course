import { expect } from "chai";
import FizzBuzz from "./../fizz-buzz.js";

describe(`FizzBuzz`, () => {
  it("should return 'Fizz' when multiple of 3", () => {
    expect(FizzBuzz(3)).to.equal("Fizz");
    expect(FizzBuzz(6)).to.equal("Fizz");
    expect(FizzBuzz(9)).to.equal("Fizz");
    expect(FizzBuzz(12)).to.equal("Fizz");
  });

  it("should return 'Buzz' when multiple of 5", () => {
    expect(FizzBuzz(5)).to.equal("Buzz");
    expect(FizzBuzz(10)).to.equal("Buzz");
    expect(FizzBuzz(20)).to.equal("Buzz");
  });

  it("should return 'FizzBuzz' when multiple of 3 and 5", () => {
    expect(FizzBuzz(15)).to.equal("FizzBuzz");
  });

  it("should return a number when non-number", () => {
    expect(FizzBuzz(2)).to.equal(2);
  });
});
