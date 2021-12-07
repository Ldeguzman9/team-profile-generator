const inquirer = require("inquirer");
const Manager = require("../lib/Manager");

test("Set Manager office Number via constructor arguments", () => {
  const officeNumber = "2022";
  const manager = new Manager(
    "Lauren",
    2021,
    "lauren@fakeemail.com",
    officeNumber
  );
  expect(manager.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const manager = new Manager("Alice", 1, "test@test.com", 2022);
  expect(manager.getRole()).toBe(testValue);
});

test("getOfficeNumber() should return Manager office number", () => {
  const officeNumber = "2022";
  const manager = new Manager(
    "Lauren",
    2021,
    "lauren@fakeemail.com",
    officeNumber
  );
  expect(manager.getOfficeNumber()).toBe(officeNumber);
});
