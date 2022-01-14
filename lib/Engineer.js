const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(github, name, id, email) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return {
      github: this.github,
    };
  }

  getRole() {
    return {
      role: 'Engineer',
    };
  }
}

module.exports = Engineer;
