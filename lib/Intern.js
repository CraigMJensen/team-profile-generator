class Intern {
  constructor(school) {
    this.school = school;
  }

  getSchool() {
    return {
      school: this.school,
    };
  }

  getRole() {
    return {
      role: 'Intern',
    };
  }
}

module.exports = Intern;
