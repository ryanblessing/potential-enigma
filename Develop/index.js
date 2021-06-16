// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const userQuestions = [{
        type: 'input',
        name: 'title',
        message: 'What is the Title of your Project? (required)',
        validate: projectName => {
            if (projectName) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a detailed descriptions of your Project (required)',
        validate: descriptionBlock => {
            if (descriptionBlock) {
                return true;
            } else {
                console.log('please describe your project for us!');
            }
        }
    },
    {
        type: 'checkbox',
        name: 'language',
        message: 'What did you build this project with? (Check all that apply!)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'BOOTSTRAP', 'NODE'],
        validate: languagesBlock => {
            if (languagesBlock) {
                return true;
            } else {
                console.log("Please tell us what languages this App was built with!");
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'learning',
        message: 'Please enter a description of what you learned from this project? (required)',
        validate: learningBlock => {
            if (learningBlock) {
                return true;
            } else {
                console.log('Some Learning had to be done!');
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please enter your websites GitHub link (Required!)',
        validate: gitHubLink => {
            if (gitHubLink) {
                return true;
            } else {
                console.log('Please enter the link to your GitHub repository!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email address!(Required)',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log("Please enter your Email address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter your contribution guidelines!',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter your testing information',
        default: true
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Please choose a license for your READ.ME file, check all that may apply!',
        choices: ['Apache License 2.0', 'MIT', 'ISC License', 'GNU GPLv3', 'Mozilla Public License 2.0', 'The Unlicense', 'No License']

    }
]


/*.then(userQuestions => {
    console.log(userQuestions);
    return generateMarkdown(userQuestions);
})
.then(generateMarkdown => {
   return writeToFile(generateMarkdown);
})*/



// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/Read.Me', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'Read.me was created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(userQuestions)
        .then(function (data) {
            writeToFile(generateMarkdown(data))
            console.log(data)
        })
    //.then(generateMarkdown => {
    // return writeToFile(generateMarkdown);
    //})
}

// Function call to initialize app
init();