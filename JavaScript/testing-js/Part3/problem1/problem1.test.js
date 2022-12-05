const compareString = require("./problem1");

test("Test case 1", () => {
  expect(compareString("AKA", "AKASHI")).toEqual("AKA");
});
test("Test case 2", () => {
  expect(compareString("KANGAROO", "KANG")).toEqual("KANG");
});
test("Test case 3", () => {
  expect(compareString("KI", "KIJANG")).toEqual("KI");
});
test("Test case 4", () => {
  expect(compareString("KUPU-KUPU", "KUPU")).toEqual("KUPU");
});
test("Test case 5", () => {
  expect(compareString("ILALANG", "ILA")).toEqual("ILA");
});
