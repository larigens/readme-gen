// Packages needed
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Constant Declaration
const fileName = './gen/README.md';

// Array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project title: ",
        name: "name",
        validate: answer => {
            if (!answer.trim()) {
                return 'Please give a name to your project!';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "list",
        message: "Choose a style: ",
        name: "style",
        choices: ['classic', 'creative']
    },
    {
        type: "confirm",
        message: "Does your app have a logo?",
        name: "logo",
        when(answer) {
            return answer.style === "creative";
        }
    },
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project: ",
        name: "description",
        validate: answer => {
            if (!answer.trim()) {
                return 'Provide a short description explaining the what, why, and how of your project.';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "confirm",
        message: "Would you like to add a table of contents? ",
        name: "tableOfContents"
    },
    {
        type: "confirm",
        message: "Does your app require instalation?",
        name: "installationQues",
    },
    {
        type: "input",
        message: "What are the steps required to install your project? ",
        name: "installation",
        when(answer) {
            return answer.installationQues === true;
        },
        validate: answer => {
            if (!answer.trim()) {
                return 'Provide a step-by-step description of how to get the development environment running.';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "confirm",
        message: "Does your app have a website?",
        name: "website",
    },
    {
        type: "input",
        message: "Please enter your website's URL: ",
        name: "websiteURL",
        when(answer) {
            return answer.website === true;
        },
        validate: answer => {
            if (!answer.trim()) {
                return "Provide your website's URL";
            }
            else {
                return true;
            }
        }
    },
    {
        type: "confirm",
        message: "Would you like to add an image or gif of your app? ",
        name: "mockup",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use: ",
        name: "usage",
        validate: answer => {
            if (!answer.trim()) {
                return 'An application is useless if no one knows how to use it!';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Enter an email address in case the user has questions about your project: ",
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
    // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
    {
        type: "input",
        message: "Enter your github username (without the @): ",
        name: "github",
        validate: answer => {
            if (!answer.trim()) {
                return 'Please enter your github username!';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "confirm",
        message: "Would you like other developers to contribute to your app?",
        name: "contributionsQues"
    },
    {
        type: "input",
        message: "Please enter guidelines for how to contribute to your app: ",
        name: "contributions",
        when(answer) {
            return answer.contributionsQues === true;
        },
        validate: answer => {
            if (!answer.trim()) {
                return 'Please enter your contribution guidelines!';
            }
            else {
                return true;
            }
        }
    },
    {
        type: "confirm",
        message: "Would you like to write tests for your application?",
        name: "testsQues"
    },
    {
        type: "input",
        message: "Please provide examples on how to run the tests: ",
        name: "tests",
        when(answer) {
            return answer.testsQues === true;
        },
        validate: answer => {
            if (!answer.trim()) {
                return 'Please provide test instructions!';
            }
            else {
                return true;
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
                return "Mention at least one library/framework/code/app! They deserve the credit!";
            }
            else {
                return true;
            }
        },
    },
    {
        type: "confirm",
        message: "Has anyone else helped you build this app?",
        name: "authorsQues"
    },
    {
        type: "input",
        message: "Enter all the authors name: ",
        name: "authors",
        when(answer) {
            return answer.authorsQues === true;
        },
        filter(answer) {
            return answer.split(/[ ,]+/).filter(Boolean);
        },
        validate(answer) {
            if (answer.length < 1) {
                return 'They deserve the credit too!';
            }
            else {
                return true;
            }
        },
    },
    {
        type: "list",
        message: "Enter your project's license: ",
        name: "license",
        choices: ['Apache License 2.0', 'MIT License', 'GNU GPLv3', 'GNU LGPLv3', 'GNU AGPLv3', 'ISC License', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'None']
    },
    {
        type: "confirm",
        message: "Would you like to add badges?",
        name: "badgesQues"
    },
    {
        type: "list",
        message: "Choose one color for your badges: ",
        name: "badgesColor",
        choices: ['green', 'blue', 'yellow', 'red', 'pink', 'light blue', 'grey', 'orange', 'violet']
    },
    {
        type: "input",
        message: "Enter the name of your repository exactly as it is displayed on GitHub: ",
        name: "repository",
        when(answer) {
            return answer.contributionsQues === true || answer.badgesQues === true || answer.license !== "none";
        },
        validate: answer => {
            if (!answer.trim()) {
                return 'Please provide your repository name!';
            }
            else {
                return true;
            }
        }
    },
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