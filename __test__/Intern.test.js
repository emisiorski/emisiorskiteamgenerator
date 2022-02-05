const Intern = require('../lib/Intern.js');

test('creates a new Intern', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.name).toBe('Ariana');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('Ariana.grande@gmail.com');
    expect(intern.school).toBe('UConn');
    expect(intern.role).toBe('Intern');  
});

test('get Intern by name', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com','UConn');
    expect(intern.getName()).toEqual('Ariana');
});

test('get intern by id', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getId()).toEqual('3');
});
test('get intern by email', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getEmail()).toEqual('Ariana.grande@gmail.com');
});
test('get intern by school', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getSchool()).toEqual('UConn');
});
test('get intern by role', () => {
    const intern = new Intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getRole()).toEqual('Intern');
});