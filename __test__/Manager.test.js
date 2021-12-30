const manager = require('./lib/Manager.js');

test('creates a new manager', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com', 'main');
    expect(manager.name).toBe('Frank');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('Frank.sinatra@gmail.com');
    expect(manager.office).toBe('main');
    expect(manager.role).toBe('manager');  
});

test('get manager by name', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com','main');
    expect(manager.getName()).toEqual('Frank');
});

test('get manager by id', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com', 'main');
    expect(manager.getID()).toEqual('4');
});
test('get manager by email', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com', 'main');
    expect(manager.getEmail()).toEqual('Frank.sinatra@gmail.com');
});
test('get manager by office', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com', 'main');
    expect(manager.getOffice()).toEqual('main');
});
test('get manager by role', () => {
    const manager = new manager('Frank', '4', 'Frank.sinatra@gmail.com', 'main');
    expect(manager.getRole()).toEqual('manager');
});