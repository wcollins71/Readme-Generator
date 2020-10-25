const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fileName = "README.md";
const tableOfContents = "## Table of Contents \n \
* [Installation](#installation) \n \
* [Usage](#usage) \n \
* [License](#license) \n \
* [Contributing](#contributing) \n \
* [Tests](#tests) \n \
* [Questions](#questions)"


// array of questions for user
const questions = [
    {
        message: "What is your GithHub username?",
        name: "githubUsername"
    },
    {
        message: "What is your email address?",
        name: "emailAddress"
    },
    {
        message: "What is your project's name?",
        name: "projectName"
    },
    {
        message: "Please write a short description of your project",
        name: "description"
    },
    {
        type: 'list',
        message: "What kind of license should your project have?",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm install"
    },
    {
        message: "What command should be run to run tests?",
        name: "testCommand",
        default: "npm test"
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    }
];

// function to write README file
function writeToFile(fileName, data) {
};

// function to initialize program
function init() {
    try {
        inquirer.prompt(questions)
            .then((response) => {
                let licenseUrl = "";
                switch (response.license) {
                    case 'MIT':
                        licenseUrl = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                        break;
                    case 'APACHE 2.0':
                        licenseUrl = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                        break;
                    case 'GPL 3.0':
                        licenseUrl = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
                        break;
                    case 'BSD 3':
                        licenseUrl = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                        break;
                    default:
                        licenseUrl = "None";
                }
                fs.writeFile("./generated/README.md", "# " + response.projectName + "\n" +
                    licenseUrl + "\n\n" +
                    "## Description \n" + response.description + "\n\n" +
                    tableOfContents + "\n\n" +
                    "## Installation \n" + "To install necesary dependencies, run the following command: \n" +
                    "--- \n" + response.installation + "\n--- \n\n" +
                    "## Usage \n\n" + response.usage +
                    "## License \n" + "This project is licensed under the " + response.license + " license \n\n" +
                    "## Contibuting \n" + response.contributing + "\n\n" +
                    "## Tests \n" + response.testCommand + "\n\n" +
                    "## Questions \n If you have any questins about the repo, open an issue or contact me directly at wayne@wcit.net.au. \n" +
                    "You can find more of my work at [wcollins71](https://github.com/wcollins71)"
                    , function (err) {
                        if (err) {
                            throw err;
                        }
                    });
            })
    } catch (err) {
        console.log(err);
    }


};

// function call to initialize program
init();
