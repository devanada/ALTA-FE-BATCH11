const studentScore = require("./problem2");

test("Test case 1", () => {
  expect(studentScore(80)).toEqual("A");
});
test("Test case 2", () => {
  expect(studentScore(75)).toEqual("B+");
});
test("Test case 3", () => {
  expect(studentScore(111)).toEqual("invalid");
});
test("Test case 4", () => {
  expect(studentScore(60)).toEqual("B");
});
test("Test case 5", () => {
  expect(studentScore(30)).toEqual("D");
});
