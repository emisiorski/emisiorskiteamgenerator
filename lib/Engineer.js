const Employee = require('./lib/Employee.js');


class Engineer extends Employee {
    constructor (name, id, email) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return this.role;
    }
}
module.exports = Engineer;