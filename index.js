// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// README Content
const generateREADME = (answers) =>
    `
    # ${answers.title}

    ${answers.description}

    ## Table of Contents

- [Installation] (#Installation)
- [Usage] (#Usage)
- [License] (#License)
- [Contribution] (#Contribution)
- [Tests] (#Tests)
- [Questions] (#Questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## License

    
    ${answers.license}

    ## Contributions

    ${answers.contributions}

    ## Tests 

    ${answers.tests}

    ## Questions

    GitHub Username: ${answers.questions2}
    GitHub URL: ${answers.questions1}
    Email: ${answers.questions3}
    
    ${answers.questions4}

- [Back to top] (#Table-of-Contents) 
    `;

inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Please enter the name of your project to be used for the project title: ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a project title to continue. "
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project. Include information describing the project, what your motivation was to build this, what problem does it solve and what you learnt while building it. ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter a description to continue. "
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Explain step by step how someone can install your project. ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter installation steps to continue. "
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how to use your project. Include instructions and screenshots.",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please explain how to use your project to continue. "
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for your project? ",
        choices: ["Apache License 2.0", "MIT License", "Creative Commons License", "GNU General Public License v2.0", "Mozilla Public License 2.0", "The Unilicense", "No License"],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please select a license to continue. "
            }
        },
        filter: (input) => {
            if (input == "Apache License 2.0") {
                return input + " [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
            } else if (input == "MIT License") {
                return input + " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            } else if (input == "Creative Commons License") {
                return input + " [![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
            } else if (input == "GNU General Public License v2.0") {
                return input + " [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
            } else if (input == "Mozilla Public License") {
                return input + " [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
            } else if (input == "The Unilicense") {
                return input + " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
            } else {
                return "You have chosen not to include a license. "
            }
        }
    },
    {
        type: "input",
        name: "contributions",
        message: "If you would like other developers to contribute to your project, please outline the guidelines for how they can do this. ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter guidelines for contribution to continue. If you are unsure, The Contributor Covenant is an industry standard. "
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "How have you tested your project? ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter testing details to continue. "
            }
        }
    },
    {
        type: "input",
        name: "questions1",
        message: "Please provide the link to your GitHub page. ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please provide a link to your GitHub page to continue. "
            }
        }
    },
    {
        type: "input",
        name: "questions2",
        message: "What is your GitHub username? ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please provide your GitHub username to continue. "
            }
        }
    },
    {
        type: "input",
        name: "questions3",
        message: "What is your email address? ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please provide your email address to continue. "
            }
        }
    },
    {
        type: "input",
        name: "questions4",
        message: "Please detail how a user can reach you if they have any further questions regarding your project. ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please let users know the best way to reach you to continue. "
            }
        }
    },
])

    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile("README.md", readmePageContent, (err) =>
            err ? console.log(err) : console.log("Successfully created README file for your project! ")
        );
    });

