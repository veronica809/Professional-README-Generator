// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github account?'
    }
];

inquirer
    .prompt(questions) 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


