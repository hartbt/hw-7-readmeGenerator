var fs = require("fs")
var inquirer = require("inquirer")
var generateMarkdown = require("./utils/generateMarkdown.js")
var path = require("path")
const { generate } = require("rxjs")

var questions = [
    {   
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },{
        type: "input",
        message: "Enter a brief description",
        name: "description"
    },{
        type: "input",
        message: "Enter some installation information",
        name: "installation"
    },{
        type: "input",
        message: "Enter some usage information",
        name: "usage"
    },{
        type: "list",
        message: "Enter licensing information",
        name: "license",
        choices: ["MIT", "APACHE2.0", "BSD3", "GPL3.0", "none"]
    },{
        type: "input",
        message: "Enter contribution information",
        name: "contribution"
    },{
        type: "input",
        message: "Enter testing information",
        name: "test"
    },{
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    }
]



function writeInFile(fileName, data){
   fs.writeFile(fileName, data, function(err){
       if(err){
           console.log(err)
       }
       console.log("Success!")
   })
}

function initialize(){
   inquirer.prompt(questions).then(data => {
       writeInFile("sample.md", generateMarkdown(data)) 
   })
}

initialize();
