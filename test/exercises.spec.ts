import { expect } from "chai";
import { lovefunc, makeNegative, sum, sumTest } from "../src/exercises";

describe("Sum arrays", () => {
  it("should return 9.2", () => {
    expect(sumTest).to.equal(9.2);
  });

  it("should return zero", () => {
    expect(sum([])).to.equal(0);
  });
});

describe("Opposites attract", () => {
  it("should return true", () => {
    expect(lovefunc(1, 4)).to.equal(true);
    expect(lovefunc(0, 1)).to.equal(true);
  });

  it("should return false", () => {
    expect(lovefunc(2, 2)).to.equal(false);
  });
});

describe("Return Negative", () => {
  it("should return negative", () => {
    expect(makeNegative(1)).to.equal("-1");
    expect(makeNegative(0)).to.equal("0");
  });
});
