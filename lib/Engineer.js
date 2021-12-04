const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer {
  constructor(github) {
    this.github = this.github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return this.role;
  } // Overridden to return 'Engineer'
}

module.exports = Engineer;
