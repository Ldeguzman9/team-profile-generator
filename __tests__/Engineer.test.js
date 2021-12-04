const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("create an Engineer object with github account", () => {
  const testGithub = "Ldeguzman9";
  const engineer = new Engineer(testGithub);
  expect(engineer.github).toEqual(testGithub);
});
