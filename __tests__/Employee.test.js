const Employee = require('../lib/Employee');

test('checks to see if employee has name, id, and email as constructor', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('returns employee name object', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getName()).toEqual(expect.any(Object));
});

test('returns employee id object', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Object));
});

test('returns employee email object', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getEmail()).toEqual(expect.any(Object));
});

test('returns employee role as object', () => {
  const employee = new Employee('Craig', 517, 'cmjensen82@gmail.com');

  expect(employee.getRole()).toEqual(expect.any(Object));
});
