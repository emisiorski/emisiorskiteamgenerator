const Employee = require('./lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee('john', '1', 'john.john@gmail.com');
    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@gmail.com');
});

test('get employee by name', () => {
    const employee = new Employee('John','1', 'john.john@gmail.com');
    expect(employee.get('name')).toBe('John');
})

test('get employee by id', () => {
    const employee = new Employee('John','1', 'john.john@gmail.com');
    expect(employee.get('id')).toBe('1');
})

test('get employee by email', () => {
    const employee = new Employee('John','1', 'john.john@gmail.com');
    expect(employee.get('email')).toBe('john.john@gmail.com');
})