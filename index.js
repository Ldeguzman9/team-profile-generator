const inquirer = require("inquirer");
const generatePage = require("./src/HTML-template");
//const { writeFile, copyFile } = require("./utils/generate-site");
const path = require("path");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require("fs");

const fileToDist = path.resolve(__dirname, "dist");
const teamFile = path.join(fileToDist, "NewTeam.html");
const teamArray = [];

const promptUser = () => {
  return inquirer
    .prompt([
      // Questions to build Team Manager Profile
      {
        type: "input",
        name: "teamName",
        message:
          "Welcome to team profile generator! Please enter your team name.",
        validate: (teamNameInput) => {
          if (teamNameInput) {
            return true;
          } else {
            console.log("Please enter your team name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "manager",
        message: "Please enter the name of the team Manager",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the name of the team Manager!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the team Manager's employee ID",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("Please enter the team Manager's employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Please enter the team Manager's email.",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("Please enter a valid email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Please enter the Manager's office number.",
        validate: (managerOfficeInput) => {
          if (managerOfficeInput) {
            return true;
          } else {
            console.log("Please enter a valid office number!");
            return false;
          }
        },
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.manager,
        response.managerId,
        response.managerEmail,
        response.managerOffice
      );
      teamArray.push(manager);
      addMember();
    });

  function addMember() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "newMember",
          message: "Would you like to add a new Team member?",
          choices: ["Engineer", "Intern", "No"],
        },
      ])
      .then((response) => {
        switch (response.newMember) {
          case "Engineer":
            engineerPrompts();
            break;
          case "Intern":
            internPrompts();
            break;
          case "No":
            writeHTML();
        }
      });
  }

  //Function to prompt Engineer questions
  function engineerPrompts() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "engineer",
          message: "Please enter the name of the Engineer",
          validate: (engineerInput) => {
            if (engineerInput) {
              return true;
            } else {
              console.log("Please enter the name of the Engineer!");
              return false;
            }
          },
        },

        {
          type: "input",
          name: "engineerId",
          message: "Please enter the Engineers's employee ID",
          validate: (engineerIdInput) => {
            if (engineerIdInput) {
              return true;
            } else {
              console.log("Please enter the Engineers's employee ID!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "Please enter the Engineers's email.",
          validate: (engineerEmailInput) => {
            if (engineerEmailInput) {
              return true;
            } else {
              console.log("Please enter a valid email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "Please enter the Engineers's Git Hub.",
          validate: (engineerGithubInput) => {
            if (engineerGithubInput) {
              return true;
            } else {
              console.log("Please enter a valid github!");
              return false;
            }
          },
        },
      ])
      .then((response) => {
        const engineer = new Engineer(
          response.engineer,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        teamArray.push(engineer);
        addMember();
        console.log("Engineer created");
      });
  }

  //Function to add Intern
  function internPrompts() {
    return inquirer
      .prompt([
        // Questions to build Intern Profile
        {
          type: "input",
          name: "intern",
          message: "Please enter the name of the Intern",
          validate: (internInput) => {
            if (internInput) {
              return true;
            } else {
              console.log("Please enter the name of the Intern!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "Please enter the Intern's employee ID",
          validate: (internIdInput) => {
            if (internIdInput) {
              return true;
            } else {
              console.log("Please enter the Intern's employee ID!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "Please enter the Intern's email.",
          validate: (internEmailInput) => {
            if (internEmailInput) {
              return true;
            } else {
              console.log("Please enter a valid email!");
              return false;
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "Please enter the Intern's educational institute.",
          validate: (internSchoolInput) => {
            if (internSchoolInput) {
              return true;
            } else {
              console.log("Please enter a valid educational institute!");
              return false;
            }
          },
        },
      ])
      .then((response) => {
        const intern = new Intern(
          response.intern,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        teamArray.push(intern);
        addMember();
        console.log("Intern created");
      });
  }

  function writeHTML() {
    fs.writeFileSync(teamFile, generatePage(teamArray), "utf-8", (err) => {
      console.log(err);
    });
  }
};

promptUser();
