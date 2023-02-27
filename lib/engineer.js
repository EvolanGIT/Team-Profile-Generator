const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email, custom) {
        super(name, id, email)
        this.custom = custom;
    }
    
    retRole() {
        return 'Engineer'
    }
    
    retImg() {
        return './images/ingImg.jpg'
    }

    retCustom() {
        return 'Github:'
    }
}

const engineer = new Engineer('Inge', 3, 'fake@mail.com', 'Engineer', 'fakeGit');
engineer.retName();
engineer.retID();
engineer.retMail();
engineer.retRole();


module.exports = Engineer;