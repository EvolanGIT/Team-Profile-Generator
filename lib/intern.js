const Employee = require('./employee.js');

class Intern extends Employee {
    constructor (name, id, email, custom) {
        super(name, id, email)
        this.custom = custom;
    }

    retRole() {
        return 'Intern'
    }

    retImg() {
        return './images/internImg.jpg'
    }

    retCustom() {
        return 'School:'
    }
}

const intern = new Intern('Harry', 9, 'fake@mail.com', 'employee', 'Hogwarts');
intern.retName();
intern.retID();
intern.retMail();
intern.retRole();


module.exports = Intern;