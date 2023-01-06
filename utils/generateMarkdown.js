const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateMarkdown(data) {
    var { name, description, installation, website, websiteURL, mockup, usage, email, acknowledgements, authors, license } = data

    if (installation) {
        installation =
            `\n## Installation

Click "<> code" - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows, and type:

&#768&#768&#768bash
git clone [paste ssh key]
&#768&#768&#768
        
I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. 
        
Detailed information about [cloning a repository.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)\n`
    }
    else if (website && !installation) {
        installation =
            `\n## Installation

No installation is required! Simply click on the link below to access the app through your browser: ${websiteURL}\n`
    }
    else {
        installation = "";
    }

    if (mockup) {
        mockup =
            `\n## Mock-Up

The following gif shows the web applications appearance and functionality

![App Screenshot](./images/demo.gif)\n`
    }
    else {
        mockup = "";
    }

    var acknowledgementsArr = []
    for (let i = 0; i < acknowledgements.length; i++) {
        acknowledgementsArr.push(
            `- [${acknowledgements[i]}]\n`
        )
    }
    acknowledgementsArr.forEach((acknowledgement) => {
        var acknow = acknowledgement.split(",");
        console.log(acknow);
    })
    var authorsArr = []
    for (let i = 0; i < authors.length; i++) {
        authorsArr.push(
            `- [${authors[i]}]\n`
        )
    }

    return `
# ${name}

## Description

${description}\n${installation}${mockup}
## Usage

${usage}
    
## Support

For support, email **${email}**

## Acknowledgements

${acknow}
## Authors

${authorsArr}
## License

Please refer to the [LICENSE](https://choosealicense.com/licenses/${(license)}/) in the repo.
  `;
}

module.exports = generateMarkdown;

// TODO: NEED TO FIX THE SEPARATOR - IT SHOULD NOT SHOW UP