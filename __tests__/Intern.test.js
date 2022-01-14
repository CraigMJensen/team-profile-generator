const Intern = require('../lib/Intern');

test('will see if Intern has a school', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.school).toEqual(expect.any(String));
});

test('if getSchool function will return a school', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.getSchool()).toEqual(intern.school);
});

test('will return role of Intern', () => {
  const intern = new Intern('UT Coding Bootcamp');

  expect(intern.getRole()).toBe('Intern');
});
