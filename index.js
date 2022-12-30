const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: "input",
        message: "Enter your app name: ",
        name: "name"
    },
    {
        type: "input",
        message:"Enter your GitHub username: ",
        name: "github"
    },
    // {
    //     type: "input",
    //     message:"Tell me a little bit about your project: ",
    //     name: "description"
    // },
    // {
    //     type: "confirm",
    //     message:"Does your app require instalation?",
    //     name: "installation"
    // },
    // {
    //     type: "confirm",
    //     message:"Does your app have a website?",
    //     name: "website"
    // },
    // {
    //     type: "confirm",
    //     message:"Would you like to display an image or gif of your app?",
    //     name: "mockup"
    // },
    // {
    //     type: "input",
    //     message:"Tell me a little bit about how your app works: ",
    //     name: "usage"
    // },
    // {
    //     type: "input",
    //     message:"Enter your email address: ",
    //     name: "email"
    // },
    // {
    //     type: "input",
    //     message:"Enter all the libraries, frameworks and other code/app you've used in your project: ",
    //     name: "acknowledgements"
    // },
    // {
    //     type: "input",
    //     message:"Enter all the authors name: ",
    //     name: "authors"
    // },
    // {
    //     type: "input",
    //     message:"Enter your project's license: ",
    //     name: "license"
    // }
])
    .then(function (data) {
        console.log(`${data.name}`)
        const filename = "README2.md"
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );
    })

    // Create a module and export the variable to another file 