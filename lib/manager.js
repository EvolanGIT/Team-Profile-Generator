const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, custom) {
        super(name, id, email)
        this.custom = custom;
    }

    retRole() {
        return 'Manager'
    }

}

const manager = new Manager('NickFury', 1, 'fake@mail.com', 'Manager');
manager.retName();
manager.retID();
manager.retMail();
manager.retRole();

module.exports = Manager;