const inquirer = require('inquirer');
const fs = require('fs');
let userInput = [];
let profileInfo = [];
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const template = require('./src/template.js')
const {generateHtml} = template

// this function just collects the Business name for the HTML.
inquirer.prompt([
    {type: 'input',
    name: 'businessID',
    message: 'Whats the name of the business?'
    }
])
.then((answer) => {
    userInput.push(answer.businessID);
        startTeam();
});

// this function loops the Inquiry to direct the user to the appropiate member.
function startTeam () {
    inquirer.prompt([
    {type: 'list',
    message: 'Would you like to add new member to the team?',
    name: 'members',
    choices: ['Manager','Engineer', 'Intern', 'Done'],
    }  
])
.then((choice) =>{
    if(choice.members === 'Manager') {
        managerPrompts();
    } else if (choice.members === 'Engineer') {
        engPrompt();
    } else if (choice.members === 'Intern') {
        intPrompt();
    } else {
        teamBuild();
        return
    }
        })
    };

// Manager's Inquiry
function managerPrompts() {
    inquirer.prompt([
    {
    type: 'input',
    name: 'managerName',
    message: "What is the Manager's Name?"
    },
    {
    type: 'input',
    name: 'managerID',
    message: "What is the Manager's ID?"
    },
    {
    type: 'input',
    name: 'managerMail',
    message: "what is the Manager's Email?"
    },
    {
    type: 'input',
    name: 'custom',
    message: "What is the Manager's office number?"
    },
    ])
.then((anwsers) => {
        let managerInfo = new Manager(anwsers.managerName, anwsers.managerId, anwsers.managerMail, anwsers.managerOffice)
        profileInfo.push(managerInfo)
        startTeam();
    }
    )};

// Engineer's Inquiry
function engPrompt() {
    inquirer.prompt([
    {
    type: 'input',
    name: 'engName',
    message: "What is the Engineer's Name?"
    },
    {
    type: 'input',
    name: 'engID',
    message: "What is the Engineer's ID?"
    },
    {
    type: 'input',
    name: 'engMail',
    message: "what is the Engineer's Email?"
    },
    {
    type: 'input',
    name: 'engGit',
    message: "What is the Engineer's Github name?"
    },
    ])
.then((anwsers) => {
        let engInfo = new Engineer(anwsers.engName, anwsers.engId, anwsers.engMail, anwsers.engGit)
        profileInfo.push(engInfo)
        startTeam();
    }
    )};
    

// Intern's Inquiry
function intPrompt() {
    inquirer.prompt([
    {
    type: 'input',
    name: 'intName',
    message: "What is the Intern's Name?"
    },
    {
    type: 'input',
    name: 'intID',
    message: "What is the Intern's ID?"
    },
    {
    type: 'input',
    name: 'intMail',
    message: "what is the Intern's Email?"
    },
    {
    type: 'input',
    name: 'intSchool',
    message: "What School did the Intern attended to?"
    },
    ])
.then((anwsers) => {
        let IntInfo = new Intern(anwsers.intName, anwsers.intId, anwsers.intMail, anwsers.intSchool)
        profileInfo.push(IntInfo)
        startTeam();
    }
    )};
    
// once all employees' information has been collected, the information is sent to the functions that generate
// the employee cards and the html respectively.
    function teamBuild(answers){
        let html = generateHtml(profileInfo);
    fs.writeFile('./dist/team.html', html, (err) =>
    err ? console.log(err) : console.log('Profiles have been made for your team!')
    )
};

