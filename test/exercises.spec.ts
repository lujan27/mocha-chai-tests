import { expect } from "chai";
import { lovefunc, sum, sumTest } from "../src/exercises";

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
  });
});
