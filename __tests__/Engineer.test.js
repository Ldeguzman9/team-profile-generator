const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("create an Engineer object with github account", () => {
  const testGithub = "Ldeguzman9";
  const engineer = new Engineer(
    "Lauren",
    2021,
    "lauren@fakeemail.com",
    testGithub
  );
  expect(engineer.github).toBe(testGithub);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const engineer = new Engineer("Alice", 1, "test@test.com", "github");
  expect(engineer.getRole()).toBe(testValue);
});

test("getGithub() should return Engineer github", () => {
  const testGithub = "Ldeguzman9";
  const engineer = new Engineer(
    "Lauren",
    2021,
    "lauren@fakeemail.com",
    testGithub
  );
  expect(engineer.getGithub()).toBe(testGithub);
});
