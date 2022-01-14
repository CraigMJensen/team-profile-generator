const Intern = require('../lib/Intern');

test('will see if Intern has a school', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.school).toEqual(expect.any(String));
});

test('if getSchool() will return a school', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.getSchool().school).toEqual(intern.school);
});

test('will return role of Intern', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.getRole().role).toBe('Intern');
});
