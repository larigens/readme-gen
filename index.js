const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./readme.js');


inquirer.prompt(
    [
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
                    console.log(".  Please enter a valid email")
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
    ]
)

    .then(function (data) {
        console.log(data);
        const filename = './gen/README.md'
        fs.writeFile(filename, generateREADME(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    })