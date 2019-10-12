import { CompA, CompB } from ".";

// const a = jest.fn(() => 1); // https://www.youtube.com/watch?v=2d-SX8YRyis

describe("CompA", () => {
  it("is truthy", () => {
    expect(CompA).toBeTruthy();
  });
});

describe("CompB", () => {
  it("is truthy", () => {
    expect(CompB).toBeTruthy();
  });
});
