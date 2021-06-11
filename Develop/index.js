// TODO: Include packages needed for this application
//const fs = require('fs')
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([{
        type:'input',
        name: 'name',
        message: 'What is the Title of your Project? (required)',
        validate: projectName => {
            if(projectName) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a detailed descriptions of your Project (required)',
        validate: descriptionBlock => {
            if (descriptionBlock) {
                return true;
            } else {
                console.log('please describe your project for us!')
            }
        }
    },
    { 
    type: 'checkbox',
    name: 'language',
    message: 'What did you build this project with? (Check all that apply!)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'BOOTSTRAP', 'NODE']  
    }
])
}
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
userQuestions();
