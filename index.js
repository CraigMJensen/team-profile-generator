const inquirer = require('inquirer');

const teamArray = [];

const managerInput = () => {
  return inquirer.prompt([
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
      default: () => {},
      validate: function (id) {
        valid = Number(id);

        if (valid) {
          return true;
        } else {
          console.log('Enter a number');
          return false;
        }
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
        } else {
          console.log('Enter a number');
          return false;
        }
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
        } else {
          console.log('Please enter a valid email');
          return false;
        }
      },
    },
  ]);
};

managerInput().catch((error) => {
  console.log(error);
});
