var fs = require("fs")
var inquirer = require("inquirer")

var questions = [
    {
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
        choices: ["MIT", "APACHE 2.0", "BSD 3", "GPL 3.0", "none"]
    },{
        type: "input",
        message: "Enter contribution information",
        name: "contribution"
    },{
        type: "input",
        message: "Enter testing information",
        name: "test"
    }
]

function askQuestions(){
    prompt(questions).then()
}

function writeInFile(){
    fs.writeFile
}

function initialize(){
   askQuestions() 
}

initialize();
