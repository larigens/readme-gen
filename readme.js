const fs = require('fs');

function generateREADME(data) {
    var { name, description, installation, website, websiteURL, mockup, usage, email, acknowledgements, authors, license } = data

    if (installation) {
        installation =
`## Installation
Click "<> code" - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows, and type:

&#768&#768&#768bash
git clone [paste ssh key]
&#768&#768&#768
        
I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. 
        
Detailed information about [cloning a repository.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)`
    }
    else if (website && !installation) {
        installation = 
`## Installation
No installation is required! Simply click on the link below to access the app through your browser: ` + websiteURL;
    }
    else {
        installation = "";
    }

    if (mockup) {
        mockup =
`## Mock-Up

The following gif shows the web applications appearance and functionality

![App Screenshot](./images/demo.gif)`
    }
    else {
        mockup = "";
    }
    return `
# ${name}

## Description
${description}

${installation}

${mockup}
   
## Usage
${usage}
    
## Support
For support, email ${email}

## Acknowledgements
- [${acknowledgements}]

## Authors
${authors}
    
## License
Please refer to the [LICENSE](https://choosealicense.com/licenses/${(license)}/) in the repo.
  `;
}

module.exports = generateREADME;