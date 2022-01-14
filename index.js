const inquirer = require('inquirer');

const managerInput = [
  {
    type: 'input',
    name: 'name',
    message: "What is the Manager's name? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Enter the Manager's name:");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the Manager's ID number? (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Enter the Manager's ID number:");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "What is the Manager's office number? (Required)",
    validate: (officeInput) => {
      if (officeInput) {
        return true;
      } else {
        console.log('Enter an office number:');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: "what is the Manager's email",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log('Enter an email address:');
      }
    },
  },
];

async function start() {
  try {
    const answers = await inquirer.prompt(managerInput);
    console.log(answers);
  } catch (error) {
    console.log(error);
  }
}

start();
