// TODO: Include packages needed for this application
const inquirer = require ("inquirer");
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
    name: 'Table of Contents',
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
    type: 'input',
    name: 'License',
    message: 'what license did you use?'
   },
   {
    type: 'input',
    name: 'Badges',
    message: 'what badges did you use?  Badges are not necessary, per se, but they demonstrate street cred.'
   },
   {
    type: 'input',
    name: 'Features',
    message: 'If your project has a lot of features, list them here.'
   },
   {
    type: 'input',
    name: 'How to Contribute',
    message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'
   },



];

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then((choices)=>{
        let templetereadme = generateMarkdown(choices);
        fs.writeFile("readme.md", templetereadme, (error) => {
         if (error) {
            throw error
        
         }
         console.log ("file sucessfully created")
        }  )
    })
}

// Function call to initialize app
init();
