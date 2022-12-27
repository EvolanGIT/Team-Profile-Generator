const Intern = require('../lib/intern');

describe("Retrieve", () => {
    it("should retrieve intern's name", () => {
        const empName = 'Harry';
        const testEmp = new Intern('Harry', 9, 'fake@mail.com', 'Intern', 'Hogwarts');
        expect(testEmp.retName()).toBe(empName);
    });

    it("should retrieve interns's role", () => {
        const empRole = 'Intern';
        const testEmp = new Intern('Harry', 9, 'fake@mail.com', 'Intern', 'Hogwarts');
        expect(testEmp.retRole()).toBe(empRole);
    });

    it("should retrieve intern's ID", () => {
        const empID = 9;
        const testEmp = new Intern('Harry', 9, 'fake@mail.com', 'Inter', 'Hogwarts');
        expect(testEmp.retID()).toBe(empID);
    });

    it("should retrieve intern's Email", () => {
        const empMail = 'fake@mail.com';
        const testEmp = new Intern('Harry', 9, 'fake@mail.com', 'Intern', 'Hogwarts');
        expect(testEmp.retMail()).toBe(empMail);
    });

    it("should retrieve intern's School", () => {
        const empSchool = 'Hogwarts';
        const testEmp = new Intern('Harry', 9, 'fake@mail.com', 'Intern', 'Hogwarts');
        expect(testEmp.retSchool()).toBe(empSchool);
    });

});