const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const fileName = "README.md";

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
        message: "What kind of license should your project have?",
        name: "license"
    },
    {   
        message: "What command should be run to install dependencies?",
        name: "dependenciesCommand"
    },
    {   
        message: "What command should be run to run tests?",
        name: "testCommand"
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
    inquirer.prompt(questions)
    .then ((response) => {
        console.log("Title " + response.githubUsername)
    })

};

// function call to initialize program
init();
