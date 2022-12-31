const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./readme.js');

inquirer.prompt([
    {
        type: "input",
        message: "Enter your app name: ",
        name: "name"
    },
    {
        type: "input",
        message: "Tell me a little bit about your project: ",
        name: "description"
    },
    {
        type: "confirm",
        message: "Does your app require instalation?",
        name: "installation"
    },
    {
        type: "input",
        message: "If your app have a website, please enter the URL: ",
        name: "website"
    },
    
    {
        type: "confirm",
        message: "Does your app have a website?",
        name: "website"
    },
    {
        type: "input",
        message: "Tell me a little bit about how your app works: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter your email address: ",
        name: "email"
    },
    {
        type: "input",
        message: "Enter all the libraries, frameworks and other code/app you've used in your project: ",
        name: "acknowledgements"
    },
    {
        type: "input",
        message: "Enter all the authors name: ",
        name: "authors"
    },
    {
        type: "input",
        message: "Enter your project's license: ",
        name: "license"
    }
])
    .then(function (data) {
        // generateREADME(data);
        const filename = './gen/README.md'
        fs.writeFile(filename, generateREADME(data), (err) =>
            err ? console.log(err) : console.log('Success!')
        );

        //     const filename = "README2.md"
        //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Success!')
        //   );
    })

    // Create a module and export the variable to another file 