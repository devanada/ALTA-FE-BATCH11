const absolute = require("./problem1");

test("Test case 1", () => {
  expect(absolute(1)).toEqual(1);
});
test("Test case 2", () => {
  expect(absolute(-1)).toEqual(1);
});
test("Test case 3", () => {
  expect(absolute(0)).toEqual(0);
});
