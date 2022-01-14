const Manager = require('../lib/Manager');

test('if officeNumber returns a number', () => {
  const manager = new Manager(100);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('will return role of Manager', () => {
  const manager = new Manager(100);

  expect(manager.getRole().role).toBe('Manager');
});
