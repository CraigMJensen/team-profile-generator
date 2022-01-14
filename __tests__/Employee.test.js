const Employee = require('../lib/Employee');

test('checks to see if employee has name, id, and email as constructor', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('returns employee name', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

test('returns employee id', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('returns employee email', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('returns employee role', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getRole()).toBe('Employee');
});
