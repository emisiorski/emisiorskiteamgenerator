const inquirer = require('inquirer');
const generatePage = require('./src/GeneratePage');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const intern = require('./lib/Intern.js');
const employee = require('./lib/Employee.js');


function generateTeamPage() {
    console.log('Please enter required team information to generate your Team Profile');

    var createEngineer = function () {

        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is your engineer name? (Required)'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is your engineer ID number? (Required)'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is your engineer email? (Required)'
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is your engineer github? (Required)'
            },
        ]).then(engineerData => {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'What is your manager name? (Required)'
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: 'What is your manager ID number? (Required)'
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'What is your manager email? (Required)'
                },
                {
                    type: 'input',
                    name: 'managerOffice',
                    message: 'What is your manager office number? (Required)'
                },
            ]).then(managerData => {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'What is your intern name? (Required)'
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: 'What is your intern ID number? (Required)'
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'What is your intern email? (Required)'
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'What is your intern school name? (Required)'
                    }
                ]).then(internData => {
                    engineerData.engineerRole = 'engineer';
                    managerData.managerRole = 'manager';
                    internData.internRole = 'intern';
                    const employeeData = [engineerData, managerData, internData];
                    const HTMLstring = generatePage(employeeData);
                    console.log(HTMLstring);
                })
            })
        })
    }
    createEngineer();
}
generateTeamPage();

