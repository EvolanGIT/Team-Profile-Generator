const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, ID, email, github) {
        super(name, ID, email)
        this.github = github;
    }
    
    retRole() {
        return 'Engineer'
    }
    
    retGit() {
        return this.github
    }

}

const engineer = new Engineer('Inge', 3, 'fake@mail.com', 'Engineer', 'fakeGit');
engineer.retName();
engineer.retID();
engineer.retMail();
engineer.retRole();
engineer.retGit();

module.exports = Engineer;