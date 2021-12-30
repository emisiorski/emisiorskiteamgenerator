const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office; name;
        this.role = 'manager';
    }
    
    getOffice() {
        return this.office;
    }
    getRole() {
        return this.role;
    }
}
module.exports = Manager;
