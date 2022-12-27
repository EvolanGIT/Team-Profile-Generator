const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, ID, email, role, school) {
        super(name, ID, email, role)
        this.school = school;
    }

    retRole() {
        return this.role
    }

    retSchool() {
        return this.school
    }
}

const intern = new Intern('Harry', 9, 'fake@mail.com', 'employee', 'Hogwarts');
intern.retName();
intern.retID();
intern.retMail();
intern.retRole();
intern.retSchool();

module.exports = Intern;