const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("create an Engineer object with github account", () => {
  const github = "Ldeguzman9";
  const engineer = new Engineer("Lauren", 2021, "lauren@fakeemail.com", github);

  expect(engineer.github).toBe(github);
});
