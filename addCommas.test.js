const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it is able to add commas to integers that have a length divisible by 3', () => {
    expect(addCommas(123456789)).toEqual('123,456,789')
  })

  test('it is able to to add commas to integers that do not have a length divisible by 3', () => {
    expect(addCommas(1234567)).toEqual('1,234,567')
  })

  test('it is able to to add commas to integers that have decimal points', () => {
    expect(addCommas(1234.567)).toEqual('1,234.567')
  })

  test('it does not add commas to integers that are less than 1000', () => {
    expect(addCommas(123)).toEqual('123')
    expect(addCommas(123.456)).toEqual('123.456')
    expect(addCommas(1.456)).toEqual('1.456')
  })

});
