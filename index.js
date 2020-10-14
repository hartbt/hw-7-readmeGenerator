var fs = require("fs")
var inquirer = require("inquirer")

inquirer
    .prompt([
    {
        type: "input",
        message: "Brief Description of the Assignment",
        name: "description",
    },{
        type: "input",
        message: "Installation Instructions",
        name: "installation"
    },{
        type: "input",
        message: "Usage Information",
        name: "usage"
    }, {
        type: "input",
        message: "Contribution Guidelines",
        name: "contribution"
    },{
        type: "input",
        message: "Tests",
        name: "tests"
    }
]).then(function(response){
    console.log(response)
    var textForFile = "*Description*" + "\n" + response.description + "\n"
    
    textForFile = textForFile + "*Installation*" + "\n" + response.installation + "\n"

    fs.writeFile("README.md", textForFile, function(err){
        if(err){
            console.log(err)
        }
        console.log("Success!")
    })
})
