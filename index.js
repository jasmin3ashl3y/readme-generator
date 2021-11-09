// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: "What is your project's name?",
        default: false
    },
    {
        name: 'contents',
        type: 'list',
        message: "Table of Contents:",
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        default: false
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add some installation instructions:',
        default: false
    },
    {
        type: 'checkbox',
        name: 'usage',
        message: 'What languages were used for this project?',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        default: false
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Include contributors to this project:',
        default: false
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'WTFPL', 'Zlib'],
        default: false
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Add a link to the Github repo for this project:',
        default: false
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Enter your email address:',
        default: false
    },
    {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();