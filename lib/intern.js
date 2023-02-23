const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, ID, email, school) {
        super(name, ID, email)
        this.school = school;
    }

    retRole() {
        return 'Intern'
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