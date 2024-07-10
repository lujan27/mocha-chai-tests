import { expect } from "chai";
import Calculator from "../src/calculator";

describe("Test calculator class", () => {
  const calc = new Calculator();

  it("Should return sum", () => {
    //arrange (create an instance of the class)
    //const calc = new Calculator();

    //act (called action, we can execute one method of the class referenced)
    const result = calc.add(2, 3);

    // assert (expectation)
    expect(result).to.equal(5);
  });

  it("should return substract", () => {
    const result = calc.substract(8, 5);

    expect(result).to.equal(3);
  });

  it("Should return multiply", () => {
    const result = calc.multiply(5, 5);

    expect(result).to.equal(25);
  });

  it("Should return divide", () => {
    const result = calc.divide(10, 2);

    expect(result).to.equal(5);
  });

  it("Should throw an error if divide with zero", () => {
    expect(() => calc.divide(10, 0)).to.throw("Can not divide by zero!");
  });
});
