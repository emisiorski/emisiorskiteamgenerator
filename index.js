const inquirer = require('inquirer');
const generatePage = require('./src/GeneratePage');

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'companyRole',
            message: 'Please Select your company role (Required)',
            choices: ['engineer', 'intern', 'manager'],
            validate: companyRole => {
                if (companyRole) {
                    return true;
                } else {
                    console.log('Please select your company role!');
                    return false;
                }
            }
        }
    ]).then((answers) => {
        var companyRole = answers.companyRole;
        if (companyRole === 'engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name? (Required)'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID number? (Required)'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email? (Required)'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your github? (Required)'
                },
            ])
        } else if (companyRole === 'manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name? (Required)'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID number? (Required)'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email? (Required)'
                },
                {
                    type: 'input',
                    name: 'name',
                    message: 'Where is your office? (Required)'
                },
            ])
        } else if (companyRole === 'intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name? (Required)'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID number? (Required)'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email? (Required)'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is your school name? (Required)'
                },
        }
    })
}
