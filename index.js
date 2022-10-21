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
    }
]

//inquirer
//    .prompt(questions) 

//.then((response) =>{
//        const portfolio = generateMarkdown(data)
//        fs.writeFile('README', portfolio, (err)=>
//           err ? console.error(err) : console.log('Success!'))
//});

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) =>{

        console.log("antes de llamar a generateMarkDown")



        generateMarkDown(answers).then(
            (result)=>{
                console.log("Despues de llamar a generateMarkDown")
                fs.writeFile("ReadMe.md", result, function(err) {

                    // If the code experiences any errors it will log the error to the console.
                    if (err) {
                      return console.log(err);
                    }
                  
                    // Otherwise, it will print: "movies.txt was updated!"
                    console.log("Readmee was created!");
                  
                  });
        

            }
        )



        // fs.writeFileSync('ReadMe.md', generateMarkdown, data);
    })

    // .then((generateMarkdown, data) =>{
    //     fs.writeFileSync('ReadMe.md', generateMarkdown, data);
    // })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();


