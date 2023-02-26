class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    retName() {
        return this.name
    }

    retID(){
        return this.id
    }

    retMail(){
        return this.email
    }

    retRole() {
        return 'Employee'
    }
}

const employee = new Employee('Yon', 7, 'fake@mail.com', 'employee');
employee.retName();
employee.retID();
employee.retMail();
employee.retRole();

module.exports = Employee;