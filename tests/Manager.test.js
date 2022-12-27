const Manager = require('../lib/manager');

describe("Retrieve", () => {
    it("should retrieve manager's name", () => {
        const empName = 'NickFury';
        const testEmp = new Manager('NickFury',1, 'fake@mail.com', 'Manager', '1');
        expect(testEmp.retName()).toBe(empName);
    });

    it("should retrieve managers's role", () => {
        const empRole = 'Manager';
        const testEmp = new Manager('NickFury',1, 'fake@mail.com', 'Manager', '1');
        expect(testEmp.retRole()).toBe(empRole);
    });

    it("should retrieve manager's ID", () => {
        const empID = 1;
        const testEmp = new Manager('NickFury',1, 'fake@mail.com', 'Manager', '1');
        expect(testEmp.retID()).toBe(empID);
    });

    it("should retrieve manager's Email", () => {
        const empMail = 'fake@mail.com';
        const testEmp = new Manager('NickFury',1, 'fake@mail.com', 'Manager', '1');
        expect(testEmp.retMail()).toBe(empMail);
    });

    it("should retrieve manager's Office number", () => {
        const empOffice = '1';
        const testEmp = new Manager('NickFury',1, 'fake@mail.com', 'Manager', '1');
        expect(testEmp.retOffice()).toBe(empOffice);
    });

});