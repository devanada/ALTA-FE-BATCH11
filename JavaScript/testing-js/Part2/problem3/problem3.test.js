const exponentiation = require("./problem3");

test("Test case 1", () => {
  expect(exponentiation(2, 3)).toEqual(8);
});
test("Test case 2", () => {
  expect(exponentiation(2, 12)).toEqual(4096);
});
test("Test case 3", () => {
  expect(exponentiation(7, 2)).toEqual(49);
});
test("Test case 4", () => {
  expect(exponentiation(9, 3)).toEqual(729);
});
test("Test case 5", () => {
  expect(exponentiation(22, 5)).toEqual(5153632);
});
test("Test case 6", () => {
  expect(exponentiation(1996, 0)).toEqual(1);
});
test("Test case 7", () => {
  expect(exponentiation(4213, -3)).toEqual("wrong input");
});
