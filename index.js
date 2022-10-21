// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Project description'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Project usage'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'For questions (email)?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Github account?'
    },
    {   
        type: 'list',
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL","None"],
        message: 'Pick your license'
    }
]


// TODO: Create a function to write README file
function writeToFile(data) {

    fs.writeFile("ReadMe.md", data, function(err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
          return console.log(err);
        }
      
        // Otherwise, it will print: "Readme.md was updated!"
        console.log("Readmee was created!");
      
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) =>{


        //llamar create badge
        //llamar create link
        //llamar creacte section


        generateMarkDown(answers)
        .then((result)=>{
            writeToFile(result) 
            
            //modify readme and add the license section 

            }
        )
    })

    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();


