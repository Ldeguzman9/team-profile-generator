const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer {
  constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  officeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  } // Overridden to return 'Manager'
}

module.exports = Manager;
