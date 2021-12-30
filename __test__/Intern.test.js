const intern = require('./lib/Intern.js');

test('creates a new intern', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.name).toBe('Ariana');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('Ariana.grande@gmail.com');
    expect(intern.school).toBe('UConn');
    expect(intern.role).toBe('intern');  
});

test('get intern by name', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com','UConn');
    expect(intern.getName()).toEqual('Ariana');
});

test('get intern by id', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getID()).toEqual('3');
});
test('get intern by email', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getEmail()).toEqual('Ariana.grande@gmail.com');
});
test('get intern by school', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getGithub()).toEqual('UConn');
});
test('get intern by role', () => {
    const intern = new intern('Ariana', '3', 'Ariana.grande@gmail.com', 'UConn');
    expect(intern.getRole()).toEqual('Ariana.grande@gmail.com');
});