const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const createCards = require('./src/createHTML');

const teamArray = [];

const managerInput = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the Manager's name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
          console.log("Enter the Manager's name:");
          return false;
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Manager's ID number? (Required)",
        default: () => {},
        validate: function (id) {
          valid = Number(id);

          if (valid) {
            return true;
          }
          console.log('Enter a number');
          return false;
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "what is the Manager's email",
        default: () => {},
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            return true;
          }
          console.log('Please enter a valid email');
          return false;
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number? (Required)",
        default: () => {},
        validate: function (officeNum) {
          valid = Number(officeNum);

          if (valid) {
            return true;
          }
          console.log('Enter a number');
          return false;
        },
      },
    ])
    .then((managerInfo) => {
      const { officeNumber, name, id, email } = managerInfo;
      const manager = new Manager(officeNumber, name, id, email);

      teamArray.push(manager);
    });
};

const employeeInput = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "What is the Employee's role?",
        choices: ['Engineer', 'Intern'],
      },
      {
        type: 'input',
        name: 'name',
        message: "What is the Employee's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          }
          console.log('Enter a name:');
          return false;
        },
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Employee's ID number?",
        default: () => {},
        validate: function (id) {
          valid = Number(id);

          if (valid) {
            return true;
          }
          console.log('Enter a number');
          return false;
        },
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Employee's email?",
        default: () => {},
        validate: function (email) {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

          if (valid) {
            return true;
          }
          console.log('Please enter a valid email');
          return false;
        },
      },
      {
        type: 'input',
        name: 'github',
        message: "What is the Employee's github name?",
        when: (input) => input.role === 'Engineer',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          }
          console.log('Enter a github username:');
          return false;
        },
      },
      {
        type: 'input',
        name: 'school',
        message: "What is the Employee's school name?",
        when: (input) => input.role === 'Intern',
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          }
          console.log('Enter a school name:');
          return false;
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Do you want to add another Employee?',
        default: false,
      },
    ])
    .then((employeeInfo) => {
      let { role, name, id, email, github, school, confirmAddEmployee } =
        employeeInfo;

      let employee;

      if (role === 'Engineer') {
        employee = new Engineer(github, name, id, email);
      } else if (role === 'Intern') {
        employee = new Intern(school, name, id, email);
      }

      teamArray.push(employee);

      if (confirmAddEmployee) {
        return employeeInput(teamArray);
      }
      return teamArray;
    });
};

managerInput()
  .then(employeeInput)
  .then((teamArray) => {
    return createCards(teamArray);
  })
  .catch((error) => {
    console.log(error);
  });
