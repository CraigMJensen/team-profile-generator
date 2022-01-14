const Employee = require('../lib/Employee');

class Manager extends Employee {
  constructor(officeNumber, name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return {
      role: 'Manager',
    };
  }
}

module.exports = Manager;
