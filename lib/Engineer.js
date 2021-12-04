const inquirer = require("inquirer");

class Engineer {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Engineer";
  }
}

module.exports = Engineer;
