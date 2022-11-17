const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("#addCommas", () => {
  test("it returns correct string for positive integer", () => {
    expect(addCommas(1234)).toBe("1,234");
    expect(addCommas(1000000)).toBe("1,000,000");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });
});

describe("#addCommas", () => {
  test("it returns correct value for single or two digit numbers", () => {
    expect(addCommas(6)).toBe("6");
    expect(addCommas(10)).toBe("10");
    expect(addCommas(-10)).toBe("-10");
    expect(addCommas(-7)).toBe("-7");
  });
});

describe("#addCommas", () => {
  test("it returns correct string for numbers with decimals", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  });
});
