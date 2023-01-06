# README LAB

## Description

README Lab is a command-line app that dynamically generates a professional README.md files. We all know it can be frustrating and confusing to write one from scratch, so I created this package to help developers create a quality readme file quickly and be able to devote more time working on the project.

## Installation

Click `<> code` - the green button. After clicking, in the local tab, copy the SSH key. Open the terminal in your Macbook or [git bash](https://git-scm.com/downloads), if you have Windows, and type:

```bash
git clone [paste ssh key]
```

I would recommend downloading [Visual Studio Code](https://code.visualstudio.com/download) to edit the code locally. If you need more information on how to clone a repository, [click here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)!

This package requires you to have [Node.js](https://nodejs.org/en/download/), npm and Inquirer installed on your machine. You can install `npm` by running the code below on your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Open the project in VS Code and make sure you are in the directory of this application before installing `Inquirer`. To install it, type the command below on your terminal:

```bash
npm install --save inquirer@^8.0.0
```

**Be sure to download this version, because newer versions no longer use the commonjs syntax require('inquirer')**

## Mock-Up

The following gif shows the web application's appearance and functionality:

![App Screenshot](./assets/images/demo.gif)

- Link to watch the tutorial: 

## Usage/Examples

Launch the application by entering the command below in your terminal:

```bash
node index.js
```

Once the application is launched, a series of questions will appear so that the user can enter the necessary information to build the file. 

A new README file will then be generated and saved in a different folder called **gen**. The content will vary depending on the user's inputs, but the available items are: **Title of the project, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions**.

## Guidelines

Below are some of the items and reasons why you should add them to your file.

## Support / Feedback

For support, email larigens@gmail.com.

## Contributions

## Acknowledgements

- [W3 Schools](https://www.w3schools.com)

- [MDN](https://developer.mozilla.org/en-US/)
  
- [JQuery](https://api.jquery.com/)

- [Node.js](https://nodejs.org/en/)
  
- [NPM](https://www.npmjs.com/)
  
- [Inquirer](https://www.npmjs.com/package/inquirer)
  
- [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
  
- [PaksTech](https://pakstech.com/blog/inquirer-js/)

## **Feedback**

If you have any feedback, please contact me at larigens@gmail.com.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://larigens.github.io/lari-gui/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lari-gui/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/coffeebr_eak)

## License

Please refer to the [LICENSE](https://choosealicense.com/licenses/mit/) in the repo.
