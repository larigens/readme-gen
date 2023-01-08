function generateMarkdown(answers) {
    var { name, style, logo, description, tableOfContents, installationQues, installation, website, websiteURL, mockup, usage, email, github, contributionsQues, contributions, testsQues, tests, acknowledgements, authorsQues, authors, license, badgesQues, badgesColor, repository } = answers
    // Initial README and will add items according to user input
    let readmeDraft = "";

    // Name, style, logo and website
    if (style === "Creative" && logo === true && website === true) {
        readmeDraft = `
<h1 align="center"> ${name} </h1>
<p align="center"><img src="./assets/images/logo.png" alt="logo" width="120px" height="120px" /><br></p>
<p align="center"><a href="${websiteURL}"><strong> Access our app! </strong></a><br></p><br>\n`
    }
    else if (style === "Creative" && logo === true && website === false) {
        readmeDraft = `
<h1 align="center"> ${name} </h1>
<p align="center"><img src="./assets/images/logo.png" alt="logo" width="120px" height="120px" /><br></p><br>\n`
    }
    else if (style === "Creative" && logo === false && website === true) {
        readmeDraft = `
<h1 align="center"> ${name} </h1>
<p align="center"><a href="${websiteURL}"><strong> Access our app! </strong></a><br></p><br>\n`
    }
    else if (style === "Creative" && logo === false && website === false) {
        readmeDraft = `
<h1 align="center"> ${name} </h1> <br>\n`
    }
    else if (style === "Classic" && website === true) {
        readmeDraft = `
# ${name}\n
<p align="center"><a href="${websiteURL}"><strong> Access our app! </strong></a><br></p><br>\n`
    }
    else if (style === "Classic" && website === false) {
        readmeDraft = `
# ${name}\n`
    }

    // Badges Colors - it has to correspond with what is on the shields' website.
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

    // License Badge - it has to correspond with what is on the choosealicense's url.
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
        readmeDraft += `
![Licence](https://img.shields.io/static/v1?label=License&message=${license}&color=${badgesColor})`
    }

    // Contributor Covenant Badge
    if (contributionsQues) {
        readmeDraft += `
![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-${badgesColor}.svg)`
    }

    // Other Badges
    if (badgesQues) {
        readmeDraft += `
![Contributors](https://img.shields.io/github/contributors/${github}/${repository}?style=plastic&color=${badgesColor})
![Forks](https://img.shields.io/github/forks/${github}/${repository}?style=plastic&color=${badgesColor})
![Stars](https://img.shields.io/github/stars/${github}/${repository}?style=plastic&color=${badgesColor})
![Issues](https://img.shields.io/github/issues/${github}/${repository}?style=plastic&color=${badgesColor})`
    }

    // Description - two different entries because if there are no badges, the description does not need a break line at the beginning.
    if (description !== null && license !== "none" || contributionsQues === true || badgesQues === true) { // With badges
        readmeDraft += `
\n
---        
\n## Description\n
${description}\n`
    }
    else { // Without badges
        readmeDraft += `
--- 
## Description\n
${description}\n`
    }

    // Table of Contents
    if (tableOfContents) {
        readmeDraft += `
## Table of Contents\n
- [Description](#description)\n
- [Table of Contents](#table-of-contents)\n`
        if (installationQues) {
            readmeDraft += `
- [Installation](#installation)\n`
        }
        if (mockup) {
            readmeDraft += `
- [Mock-Up](#mock-up)\n`
        }
`- [Usage](#usage)\n
- [Questions](#questions)\n`
        if (contributionsQues) {
            readmeDraft += `
- [Contributions](#contributions)\n`
        }
        if (testsQues) {
            readmeDraft += `
- [Tests](#tests)\n`
        }
`-[Credits]($credits)\n
- [Acknowledgements](#acknowledgements)\n`
        if (authorsQues) {
            readmeDraft += `
- [Authors](#authors)\n`
        }
        if (license !== "none") {
            readmeDraft += `
- [License](#license)\n`
        }
    }

    // Instalation
    if (installationQues) {
        readmeDraft += `
## Installation\n
${installation}\n`
    }

    // Mock-Up
    if (mockup) {
        readmeDraft += `
## Mock-Up\n
The following gif shows the web applications appearance and functionality\n
**To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it - DELETE THIS LINE!**\n
![App Screenshot](./assets/images/demo.gif)\n`
    }

    // Usage
    if (usage !== null) {
        readmeDraft += `
## Usage\n
${usage}\n`
    }

    // Questions
    if (email && github) {
        readmeDraft += `
## Questions\n
For questions and support feel free to contact me via:\n
<a href="mailto:${email}">📧 Email </a>\n
<a href="https://github.com/${github}">🐈‍⬛ GitHub </a>\n`
    }

    // Contributions
    if (contributionsQues) {
        readmeDraft += `
## Contributions\n
${contributions}\n`
    }

    // Tests
    if (testsQues) {
        readmeDraft += `
## Tests\n
${tests}\n`
    }

    // Acknowledgements
    if (acknowledgements !== null) {
        const acknowledgementsArr = acknowledgements.map(item => `- [${item}](ADD THE WEBSITE URL INSIDE THIS PARENTHESIS AND DELETE THE COMMA)\n`)
        readmeDraft += `
## Credits\n
### Acknowledgements\n
${acknowledgementsArr}`
    }

    // Authors
    if (authorsQues) {
        const authorsArr = authors.map(item => `- [${item}](ADD HER/HIS GITHUB URL INSIDE THIS PARENTHESIS AND DELETE THE COMMA)\n`)
        readmeDraft += `
### Authors\n
${authorsArr}`
    }

    // License
    if (license !== "none") {
        readmeDraft += `
## License\n
Please refer to the [LICENSE](https://choosealicense.com/licenses/${(license)}/) in the repository.`
    }

    return readmeDraft;
}

module.exports = generateMarkdown;