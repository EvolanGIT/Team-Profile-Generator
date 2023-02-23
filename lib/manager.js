const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, ID, email, office) {
        super(name, ID, email)
        this.office = office;
    }

    retRole() {
        return 'Manager'
    }

    retOffice() {
        return this.office
    }
}

const manager = new Manager('NickFury', 1, 'fake@mail.com', 'Manager', '1');
manager.retName();
manager.retID();
manager.retMail();
manager.retRole();
manager.retOffice();

module.exports = Manager;