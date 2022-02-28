// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title? (Required)",
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title!');
            return false;
          }
        }
      },

    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
    
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter installation steps!');
            return false;
          }
        }
      },

    {
        type: 'input',
        name: 'usage',
        message: 'Enter details about using the repository',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter usage information!');
            return false;
          }
        }
      },

    {
        type: 'input',
        name: 'contributing',
        message: 'Add contributing guidelines',
        validate: contributingInput => {
          if (contributingInput) {
            return true;
          } else {
            console.log('You need to enter contributing guidelines!');
            return false;
          }
        }
      },

    {
        type: 'input',
        name: 'test',
        message: 'Provide tests for your project',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter a project tests!');
            return false;
          }
        }
      },

    {
        type: 'list',
        name: 'license',
        message: "Choose a license from the list below (Required)",
        choices: ['APACHE 2.0', 'BSD 3', 'GPL 3.0', 'MIT', 'None']
      },

    {
        type: 'input',
        name: 'github',
        message: 'Type in your GitHub account link',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter your GitHub account link!');
            return false;
          }
        }
      },

    {
        type: 'input',
        name: 'email',
        message: 'Type in your email',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter your email!');
            return false;
          }
        }
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(promptAnswers=>{
        writeToFile('README.md', generateMarkdown({...promptAnswers}))
    })
}

// Function call to initialize app
init();
