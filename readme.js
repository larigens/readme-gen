const fs = require('fs');

function generateREADME(data) {
    var { name, description, installation, website, usage, email, acknowledgements, authors, license } = data
    if (installation) {
        installation = 
`Click "<> code" - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows, and type:

&#768&#768&#768bash
git clone [paste ssh key]
&#768&#768&#768
        
I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. 
        
Detailed information about [cloning a repository.](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
        
You will also need to download [node.js](https://nodejs.org/en/download/). 
        
And NPM, that you can install running the code below in your terminal:
        
&#768&#768&#768bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
&#768&#768&#768`
    }
    else {
        installation =  `No installation is required! Simply click on the link below to access the app through your browser: ` + website;
    }

    return `
#${name}

## Description
${description}

## Installation
${installation}
   
## Usage
${usage}
    
## Support
For support, email ${email}

## Acknowledgements
- [${acknowledgements}]

## Authors
- [${authors}]
    
## License
Please refer to the [LICENSE](https://choosealicense.com/licenses/${(license)}/) in the repo.
  `;
}

module.exports = generateREADME;