const Engineer = require('../lib/engineer');

describe("Retrieve", () => {
    it("should retrieve engineer's name", () => {
        const empName = 'Yon';
        const testEmp = new Engineer('Yon', 7, 'fake@mail.com', 'Employee', 'fakeGit');
        expect(testEmp.retName()).toBe(empName);
    });

    it("should retrieve engineer's role", () => {
        const empRole = 'Employee';
        const testEmp = new Engineer('Yon', 7, 'fake@mail.com', 'Employee', 'fakeGit');
        expect(testEmp.retRole()).toBe(empRole);
    });

    it("should retrieve engineer's ID number", () => {
        const empID = 7;
        const testEmp = new Engineer('Yon', 7, 'fake@mail.com', 'Employee', 'fakeGit');
        expect(testEmp.retID()).toBe(empID);
    });

    it("should retrieve engineer's Email", () => {
        const empMail = 'fake@mail.com';
        const testEmp = new Engineer('Yon', 7, 'fake@mail.com', 'Employee', 'fakeGit');
        expect(testEmp.retMail()).toBe(empMail);
    });

    it("should retrieve engineer's Github Alias", () => {
        const empGit = 'fakeGit';
        const testEmp = new Engineer('Yon', 7, 'fake@mail.com', 'Employee', 'fakeGit');
        expect(testEmp.retGit()).toBe(empGit);
    });

});