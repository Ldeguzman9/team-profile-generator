const inquirer = require("inquirer");
const Engineer = require("../lib/Engineer");

test("create an Engineer object", () => {
  const engineer = new Engineer("Lauren", 2021, "lauren@fakeemail.com");

  expect(typeof employee).toBe("object");
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});
