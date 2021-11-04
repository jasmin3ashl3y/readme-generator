// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: "What is your project's name?"
    },
    {
        name:
        type: 'list'
        message: 
        choices: ['MIT', 'UofT']
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
        writeToFile('test.md', markdown);
    });
}

// Function call to initialize app
init();