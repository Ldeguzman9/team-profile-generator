const inquirer = require("inquirer");
const Intern = require("../lib/Intern");

test("Set intern school via constructor arguments", () => {
  const school = "UC Davis";
  const intern = new Intern("Lauren", 2021, "lauren@fakeemail.com", school);
  expect(intern.school).toBe(school);
});

test('getRole() should return "Intern"', () => {
  const testValue = "Intern";
  const intern = new Intern("Alice", 1, "test@test.com", "UC Davis");
  expect(intern.getRole()).toBe(testValue);
});

test("getSchool() should return intern school", () => {
  const school = "UC Davis";
  const intern = new Intern("Lauren", 2021, "lauren@fakeemail.com", school);
  expect(intern.getSchool()).toBe(school);
});
