const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern {
  constructor(name, id, email, school) {
    this.school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return this.role;
  } // Returns 'Intern'
}

module.exports = Intern;
