// Node modules
const inquirer = require("inquirer");
const fs = require("fs");

// README Content
const generateREADME = (answers) =>
    `
    # ${answers.title}
    ${generateBadge(answers.license)}

    ${answers.description}

    ## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contribution)
- [Tests](#Tests)
- [Questions](#Questions)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## License

    ${generateDescription(answers.license, answers)}

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
// Function to take user input from license and create a badge
const generateBadge = (license) => {
    if (license == "Apache License 2.0") {
        return " [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license == "MIT License") {
        return " [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license == "GNU General Public License v2.0") {
        return " [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
    } else if (license == "Mozilla Public License 2.0") {
        return " [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    } else if (license == "The Unilicense") {
        return " [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    } else {
        return " "
    }
};

// Function to take user input from license and insert a description into license section
const generateDescription = (license, answers) => {
    if (license == "Apache License 2.0") {
        return license + `\n\nCopyright 2021 ${answers.name}
            
                Licensed under the Apache License, Version 2.0 (the "License");
                you may not use this file except in compliance with the License.
                You may obtain a copy of the License at
                
                    http://www.apache.org/licenses/LICENSE-2.0
                
                Unless required by applicable law or agreed to in writing, software
                distributed under the License is distributed on an "AS IS" BASIS,
                WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                See the License for the specific language governing permissions and
                limitations under the License.`

    } else if (license == "MIT License") {
        return license + `\n\nCopyright © 2021 ${answers.name}
                
                Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    } else if (license == "GNU General Public License v2.0") {
        return license + `\n\nCopyright © 2021 ${answers.name}

                This library is free software; you can redistribute it and/or
                modify it under the terms of the GNU Library General Public
                License as published by the Free Software Foundation; either
                version 2 of the License, or (at your option) any later version.
                
                This library is distributed in the hope that it will be useful,
                but WITHOUT ANY WARRANTY; without even the implied warranty of
                MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
                Library General Public License for more details.
                
                You should have received a copy of the GNU Library General Public
                License along with this library; if not, write to the
                Free Software Foundation, Inc., 51 Franklin St, Fifth Floor,
                Boston, MA  02110-1301, USA.`

    } else if (license == "Mozilla Public License 2.0") {
        return license + `\n\nCopyright © 2021 ${answers.name}
                
                This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

                If it is not possible or desirable to put the notice in a particular file, then You may include the notice in a location (such as a LICENSE file in a relevant directory) where a recipient would be likely to look for such a notice.
                
                You may add additional accurate notices of copyright ownership.`
    } else if (license == "The Unilicense") {
        return license + `\n\nCopyright © 2021 ${answers.name}
                This is free and unencumbered software released into the public domain.

                Anyone is free to copy, modify, publish, use, compile, sell, or
                distribute this software, either in source code form or as a compiled
                binary, for any purpose, commercial or non-commercial, and by any
                means.
                
                In jurisdictions that recognize copyright laws, the author or authors
                of this software dedicate any and all copyright interest in the
                software to the public domain. We make this dedication for the benefit
                of the public at large and to the detriment of our heirs and
                successors. We intend this dedication to be an overt act of
                relinquishment in perpetuity of all present and future rights to this
                software under copyright law.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
                
                For more information, please refer to <http://unlicense.org/>`
    } else {
        return "This project is not licensed. "
    }
}

// Questions the user will be asked when they first run the program
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your full name? ",
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please enter your name to continue. "
            }
        }
    },
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
        choices: ["Apache License 2.0", "MIT License", "GNU General Public License v2.0", "Mozilla Public License 2.0", "The Unilicense", "No License"],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return "Please select a license to continue. "
            }
        },
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

    // Take the users input and create the README file
    .then((answers) => {
        const readmePageContent = generateREADME(answers);
        fs.writeFile("README.md", readmePageContent, (err) =>
            err ? console.log(err) : console.log("Successfully created README file for your project! ")
        );
    });

