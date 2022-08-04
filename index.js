// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'Title',
        message: 'what is the title of your project'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of your project'
    },
    {
        type: 'input',
        name: 'TableofContents',
        message: 'what is in your read.me'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'List your collaborators'
    },
    {
        type: 'list',
        message: 'Which License would you like to include?',
        name: 'License',
        choices: ["No License", "Apache 2.0 License", "Boost", "BSD 3-Clause License", "BSD 2-Clause License", "CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International", "Eclipse Public License 1.0", "GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3", "The Hippocratic License 2.1", "The Hippocratic License 3.0", "IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)", "The Perl License", "The Artistic License 2.0", "SIL Open Font License 1.1", "The Unlicense", "The Do What the Fuck You Want to Public License", "The zlib/libpng License"]
    },
    {
        type: 'input',
        name: 'Features',
        message: 'If your project has a lot of features, list them here.'
    },
    {
        type: 'input',
        name: 'HowtoContribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'How can someone reach you if they have questions? Please enter your information like this without parentheses (Github Username, Email Address)'
    },



];
// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then((choices) => {
            let templetereadme = generateMarkdown(choices);
            fs.writeFile("readme.md", templetereadme, (error) => {
                if (error) {
                    throw error

                }
                console.log("file sucessfully created")
            })
        })
}

// Function call to initialize app
init();
