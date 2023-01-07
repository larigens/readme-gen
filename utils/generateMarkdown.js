// TODO: Create a function that returns a license badge based on which license is passed in
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// function renderLicenseSection(license) { }

function generateMarkdown(data) {
    var { name, style, logo, description, tableOfContents, installationQues, installation, website, websiteURL, mockup, usage, email, github, contributionsQues, contributions, testsQues, tests, acknowledgements, authorsQues, authors, license, badgesQues, badgesColor, repository } = data

    // Name, style, logo and website
    if (style === "creative" && logo === true && website === true) {
        `<h1 align="center"> ${name} </h1>
         <p align="center">
            <img src="./assets/images/logo.png" alt="logo" width="120px" height="120px" />
            <br>
         </p>
         <p align="center">
             <a href="${websiteURL}"><strong> Access our app! </strong></a>
         <br>
         </p>
         <br>`
    }
    else if (style === "creative" && logo === true && website === false) {
        `<h1 align="center"> ${name} </h1>
         <p align="center">
            <img src="./assets/images/logo.png" alt="logo" width="120px" height="120px" />
            <br>
         </p>
         <br>`
    }
    else if (style === "creative" && logo === false && website === true) {
        `<h1 align="center"> ${name} </h1>
         <p align="center">
             <a href="${websiteURL}"><strong> Access our app! </strong></a>
         <br>
         </p>
         <br>`
    }
    else if (style === "creative" && logo === false && website === false) {
        `<h1 align="center"> ${name} </h1> <br>`
    }
    else if (style === "classic" && website === true) {
        `# ${name}\n
        <p align="center">
            <a href="${websiteURL}"><strong> Access our app! </strong></a>
        <br>
        </p>
        <br>`
    }
    else if (style === "classic" && website === false) {
        `# ${name}\n`
    }

    // Badges Colors
    if (badgesColor === "green") {
        badgesColor = "success"
    }
    else if (badgesColor === "pink") {
        badgesColor = "ff69b4"
    }
    else if (badgesColor === "light blue") {
        badgesColor = "9cf"
    }
    else if (badgesColor === "grey") {
        badgesColor = "inactive"
    }
    else if (badgesColor === "violet") {
        badgesColor = "blueviolet"
    }

    // License Badge
    if (license !== "none") {
        `![Licence](https://img.shields.io/static/v1?label=License&message=${license}&color=${badgesColor})`
    }

    // Contributor Covenant Badge
    if (contributionsQues) {
        `![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-${badgesColor}.svg)`
    }

    // Other Badges
    if (badgesQues) {
        `![Contributors](https://img.shields.io/github/contributors/${github}/${repository}?style=plastic&color=${badgesColor})
         ![Forks](https://img.shields.io/github/forks/${github}/${repository}?style=plastic&color=${badgesColor})
         ![Stars](https://img.shields.io/github/stars/${github}/${repository}?style=plastic&color=${badgesColor})
         ![Issues](https://img.shields.io/github/issues/${github}/${repository}?style=plastic&color=${badgesColor})\n`
    }

    // Description
    if (description !== null) {
        `## Description\n${description}\n`
    }
    // Table of Contents
    if (tableOfContents) {
        `## Table of Contents\n
            -[Description](#description)
            - [Table of Contents](#table-of-contents)`
        if (installationQues) {
            `- [Installation](#installation)`
        }
        if (mockup) {
            `- [Mock-Up](#mock-up)`
        }
            `- [Usage](#usage)
             - [Questions](#questions)`
        if (contributionsQues) {
            `- [Contributions](#contributions)`
        }
        if (testsQues) {
            `- [Tests](#tests)`
        }
            `- [Acknowledgements](#acknowledgements)`
        if (authorsQues) {
            `- [Authors](#authors)`
        }
        if (license !== "none") {
            `- [License](#license)\n`
        }
    }

    // Instalation
    if (installationQues) {
        `## Installation\n${installation}\n`
    }

    // Mock-Up
    if (mockup) {
        `## Mock-Up\n
         The following gif shows the web applications appearance and functionality\n
         ![App Screenshot](./images/demo.gif)\n`
    }

    // Usage
    if (usage !== null) {
        `## Usage\n${usage}\n`
    }

    // Questions
    if (email && github) {
        `## Questions\n
        For questions and support feel free to contact me via:
        <a href="mailto:${email}">Email</a>!
        GitHub: ${github}\n`
    }

    // Contributions
    if (contributionsQues) {
        `## Contributions\n${contributions}\n`
    }

    // Tests
    if (testsQues) {
        `## Tests\n${tests}\n`
    }

    // Acknowledgements
    if (acknowledgements !== null) {
        `## Acknowledgements\n`
        var acknowledgementsArr = []
        for (let i = 0; i < acknowledgements.length; i++) {
            acknowledgementsArr.push(
                `- [${acknowledgements[i]}]\n`
            )
        }
    }

    // Authors
    if (authorsQues) {
        `## Authors\n`
        var authorsArr = []
        for (let i = 0; i < authors.length; i++) {
            authorsArr.push(
                `- [${authors[i]}]\n`
            )
        }
    }

    // License
    if (license === "Apache License 2.0") {
        license = "apache-2.0"
    }
    else if (license === "MIT License") {
        license = "mit"
    }
    else if (license === "GNU GPLv3") {
        license = "gpl-3.0"
    }
    else if (license === "GNU LGPLv3") {
        license = "lgpl-3.0"
    }
    else if (license === "GNU AGPLv3") {
        license = "agpl-3.0"
    }
    else if (license === "ISC License") {
        license = "isc"
    }
    else if (license === "Mozilla Public License 2.0") {
        license = "mpl-2.0"
    }
    else if (license === "Boost Software License 1.0") {
        license = "bsl-1.0"
    }

    if (license !== "none") {
        `## License\n
         Please refer to the[LICENSE](https://choosealicense.com/licenses/${(license)}/) in the repository.`
    }
}

module.exports = generateMarkdown;