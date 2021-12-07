const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

test("Create employee object", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("Set employee name via constructor arguments", () => {
  const name = "Alice";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("Set employee id via constructor argument", () => {
  const testValue = 100;
  const employee = new Employee("Foo", testValue);
  expect(employee.id).toBe(testValue);
});

test("Set employee email via constructor argument", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Foo", 1, testValue);
  expect(employee.email).toBe(testValue);
});

test("Can get employee name via getName()", () => {
  const testValue = "Alice";
  const employee = new Employee(testValue);
  expect(employee.getName()).toBe(testValue);
});

test("Can get employee id via getId()", () => {
  const testValue = 100;
  const employee = new Employee("Foo", testValue);
  expect(employee.getId()).toBe(testValue);
});

test("Can get employee email via getEmail()", () => {
  const testValue = "test@test.com";
  const employee = new Employee("Foo", 1, testValue);
  expect(employee.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const employee = new Employee("Alice", 1, "test@test.com");
  expect(employee.getRole()).toBe(testValue);
});
