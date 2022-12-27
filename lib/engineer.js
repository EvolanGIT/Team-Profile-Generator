const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, ID, email, role, github) {
        super(name, ID, email, role)
        this.github = github;
    }

    retRole() {
        return this.role
    }

    retGit() {
        return this.github
    }
}

const engineer = new Engineer('Inge', 3, 'fake@mail.com', 'employee', 'fakeGit');
engineer.retName();
engineer.retID();
engineer.retMail();
engineer.retRole();
engineer.retGit();

module.exports = Engineer;