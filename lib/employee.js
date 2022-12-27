class Employee {
    constructor(name, ID, email, role) {
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = role;
    }

    retName() {
        return this.name
    }

    retID(){
        return this.ID
    }

    retMail(){
        return this.email
    }

    retRole() {
        return this.role
    }
}

const employee = new Employee('Yon', 7, 'fake@mail.com', 'employee');
employee.retName();
employee.retID();
employee.retMail();
employee.retRole();

module.exports = Employee;