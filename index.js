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
        name: "team-name",
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
          choices: ["Engineer", "Intern", "None"],
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
          case "None":
            writeHTML();
        }
      });
  }
  function engineerPrompts() {
    console.log("Engineer created");
    addMember();
  }

  function internPrompts() {
    console.log("Intern created");
    addMember();
  }

  // Questions to add an employee profiles

  // {
  //   type: "confirm",
  //   name: "confirmAddEmployee",
  //   message: "Would you like to add another team member?",
  //   default: true,
  // },

  // // questions to add an engineer profile

  // {
  //   type: "input",
  //   name: "about",
  //   message: "What is the name of the Employee",
  //   when: ({ confirmAddEmployee }) => confirmAddEmployee,
  // },

  function writeHTML() {
    fs.writeFileSync(teamFile, generatePage(teamArray), "utf-8", (err) => {
      console.log(err);
    });
  }
};

promptUser();

// const promptProject = (portfolioData) => {
//   console.log(`
// =================
// Add a New Project
// =================
// `);

//   // If there's no 'projects' array property, create one
//   if (!teamData.employee) {
//     teamData.employee = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is the name of the employee? (Required)",
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log("Please enter a valid name");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "employeeId",
//         message: "Provide an employee ID number.",
//         validate: (employeeId) => {
//           if (employeeId) {
//             return true;
//           } else {
//             console.log("You need to enter an employee ID number!");
//             return false;
//           }
//         },
//       },
//       {
//         type: "input",
//         name: "employeeEmail",
//         message: "Provide the employee's email.",
//         validate: (employeeEmail) => {
//           if (employeeEmail) {
//             return true;
//           } else {
//             console.log("You need to enter a valid email address");
//             return false;
//           }
//         },
//       },
//       //   {
//       //     type: "checkbox",
//       //     name: "languages",
//       //     message: "What did you this project with? (Check all that apply)",
//       //     choices: [
//       //       "JavaScript",
//       //       "HTML",
//       //       "CSS",
//       //       "ES6",
//       //       "jQuery",
//       //       "Bootstrap",
//       //       "Node",
//       //     ],
//       //   },
//       //   {
//       //     type: "input",
//       //     name: "link",
//       //     message: "Enter the GitHub link to your project. (Required)",
//       //     validate: (linkInput) => {
//       //       if (linkInput) {
//       //         return true;
//       //       } else {
//       //         console.log("You need to enter a project GitHub link!");
//       //         return false;
//       //       }
//       //     },
//       //   },
//     ])
//     .then((teamData) => {
//       teamData.employee.push(profileData);
//       if (profileData.confirmAddEmployee) {
//         return promptQuestions(teamData);
//       } else {
//         return teamData;
//       }
//     });
// };

// // promptUser()
// //   .then(promptQuestions)
// //   .then((profileData) => {
// //     return generatePage(teamData);
// //   })
// //   .then((pageHTML) => {
// //     return writeFile(pageHTML);
// //   })
// //   .then((writeFileResponse) => {
// //     console.log(writeFileResponse);
// //     return copyFile();
// //   })
// //   .then((copyFileResponse) => {
// //     console.log(copyFileResponse);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
