const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "b0yage";
    const employeeInstance = new Engineer("Christian", 2, "christivnvertiz@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "b0yage";
    const employeeInstance = new Engineer("James", 2, "jchristivnvertiz@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Christian", 2, "christivnvertiz@gmail.com", "b0yage");
    expect(employeeInstance.getRole()).toBe(returnValue);
});