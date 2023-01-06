// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Constant Declaration
const fileName = './gen/README.md';

// Array of questions for user input
const questions = [
    // I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
    {
        type: "input",
        message: "Enter your app name: ",
        name: "name",
        validate: answer => {
            if (!answer.trim()) {
                return 'Please give your project a name!';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Tell me a little bit about your project: ",
        name: "description",
        validate: answer => {
            if (!answer.trim()) {
                return 'Please enter a description of your project, we need to let people know what it does specifically';
            }
            else {
                return true;
            }
        }
    },
    // WHEN I click on the links in the Table of Contents
    // THEN I am taken to the corresponding section of the README
    // {
    //     type: "input",
    //     message: "Tell me a little bit about your project: ",
    //     name: "tableofcontents",
    //     validate: answer => {
    //         if (!answer.trim()) {
    //             return 'Please enter a description of your project, we need to let people know what it does specifically';
    //         }
    //         else {
    //             return true;
    //         }
    //     }
    // },
    {
        type: "confirm",
        message: "Does your app require instalation?",
        name: "installation",
    },
    {
        type: "confirm",
        message: "Does your app have a website?",
        name: "website",
        when(answers) {
            return answers.installation === false;
        }
    },
    {
        type: "input",
        message: "Please enter your website's URL: ",
        name: "websiteURL",
        when(answers) {
            return answers.website === true;
        }
    },
    {
        type: "confirm",
        message: "Would you like to add an image or gif of your app? ",
        name: "mockup",
    },
    {
        type: "input",
        message: "Tell me a little bit about how your app works: ",
        name: "usage",
        validate: answer => {
            if (!answer.trim()) {
                return 'Please enter a description of how your project works, we need to let people know how to use it';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "email",
        validate: (answer) => {
            const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer)
            if (valid) {
                return true;
            } else {
                console.log("\n Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Enter all the libraries, frameworks and other code/app you've used in your project: ",
        name: "acknowledgements",
        filter(answer) {
            return answer.split(/[ ,]+/).filter(Boolean);
        },
        validate(answer) {
            if (answer.length < 1) {
                return "Mention at least one library/framework/code/app!";
            }
            else {
                return true;
            }
        },
    },
    {
        type: "input",
        message: "Enter all the authors name: ",
        name: "authors",
        filter(answer) {
            return answer.split(/[ ,]+/).filter(Boolean);
        },
        validate(answer) {
            if (answer.length < 1) {
                return 'Author is mandatory for license';
            }
            else {
                return true;
            }
        },
    },
    // Needs to be a list. a badge for that license is added near the top of the README 
    // and a notice is added to the section of the README entitled License that explains which license the application is covered under
    {
        type: "input",
        message: "Enter your project's license: ",
        name: "license",
        validate: answer => {
            if (!answer.trim()) {
                return 'License is mandatory!'
            }
            else {
                return true;
            }
        }
    }
    //         WHEN I enter my GitHub username
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.log(err) : console.log('Your README.md has been successfully generated!')
    );
}

// Initialize app
function init() {
    return inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile(fileName, data);
        })
        .catch(err => {
            console.log(err);
        })
}

// Function call to initialize app
init();