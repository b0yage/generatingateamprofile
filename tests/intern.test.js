const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UT";
  const e = new Intern("b0yage", 1, "christivnvertiz@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("b0yage", 1, "christivnvertiz@gmail.com", "UT");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UT";
  const e = new Intern("b0yage", 1, "christivnvertiz@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});