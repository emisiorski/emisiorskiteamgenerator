const engineer = require('./lib/Engineer.js');

test('creates a new engineer', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com', 'ellen-engineer');
    expect(engineer.name).toBe('Ellen');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('Ellen.degeneres@gmail.com');
    expect(engineer.github).toBe('ellen-engineer');
    expect(engineer.role).toBe('Engineer');  
});

test('get engineer by name', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com','ellen-engineer');
    expect(engineer.getName()).toEqual('Ellen');
});

test('get engineer by id', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com', 'ellen-engineer');
    expect(engineer.getID()).toEqual('2');
});
test('get engineer by email', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com', 'ellen-engineer');
    expect(engineer.getEmail()).toEqual('ellen.degeneres@gmail.com');
});
test('get engineer by github', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com', 'ellen-engineer');
    expect(engineer.getGithub()).toEqual('ellen-engineer');
});
test('get engineer by role', () => {
    const engineer = new Engineer('Ellen', '2', 'ellen.degeneres@gmail.com', 'ellen-engineer');
    expect(engineer.getRole()).toEqual('ellen.degeneres@gmail.com');
});
