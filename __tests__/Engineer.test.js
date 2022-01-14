const Engineer = require('../lib/Engineer');

test('if engineer has github', () => {
  const engineer = new Engineer('craigmjensen');

  expect(engineer.github).toEqual(expect.any(String));
});

test('if getGithub function gets github', () => {
  const engineer = new Engineer('craigmjensen');

  expect(engineer.getGithub()).toEqual(engineer.github);
});

test('will return role of Engineer', () => {
  const engineer = new Engineer('craigmjensen');

  expect(engineer.getRole()).toBe('Engineer');
});
