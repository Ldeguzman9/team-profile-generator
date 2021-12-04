const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

test("create an Employee object", () => {
  const employee = new Employee("Dave", 2020, "dave@fakeemail.com");

  expect(typeof employee).toBe("object");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});
