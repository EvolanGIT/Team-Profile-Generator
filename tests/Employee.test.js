const Employee = require('../lib/employee');

describe("Retrieve", () => {
    it("should retrieve employee's name", () => {
        const empName = 'JhonDoe';
        const testEmp = new Employee('JhonDoe', 7, 'fake@mail.com', 'Employee');
        expect(testEmp.retName()).toBe(empName);
    });

    it("should retrieve employee's role", () => {
        const empRole = 'Employee';
        const testEmp = new Employee('JhonDoe', 7, 'fake@mail.com', 'Employee');
        expect(testEmp.retRole()).toBe(empRole);
    });

    it("should retrieve employee's ID", () => {
        const empID = 7;
        const testEmp = new Employee('JhonDoe', 7, 'fake@mail.com', 'Employee');
        expect(testEmp.retID()).toBe(empID);
    });

    it("should retrieve employee's Email", () => {
        const empMail = 'fake@mail.com';
        const testEmp = new Employee('JhonDoe', 7, 'fake@mail.com', 'Employee');
        expect(testEmp.retMail()).toBe(empMail);
    });

    

});