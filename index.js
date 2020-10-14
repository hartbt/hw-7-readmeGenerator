var fs = require("fs")
var inquirer = require("inquirer")


function basicDescription(){


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
    var mainContents = "*Description*" + "\n" + "\n" + response.description + "\n"
    
    mainContents = "\n" + mainContents + "*Installation*" + "\n" + "\n" + response.installation + "\n"
    mainContents= mainContents + "\n"
    mainContents = "\n" + mainContents + "*Usage*" + "\n" + "\n" + response.usage + "\n"
    mainContents = mainContents + "\n"
    mainContents = "\n" + mainContents + "*Contribution*" + "\n" + "\n" + response.contribution + "\n" 
    mainContents = mainContents + "\n"
    mainContents = "\n" + mainContents + "*Tests*" + "\n" + "\n" + response.tests + "\n"
    mainContents = mainContents + "\n"

    fs.writeFile("README.md", mainContents, function(err){
        if(err){
            console.log(err)
        }
        console.log("Success!")
    })
})
}

function questionsArea(){


inquirer
    .prompt([
    {
        type: "type",
        message: "GitHub Username",
        name: "github"
    },{
        type: "type",
        message: "Email",
        name: "email"
    }, 
    ]).then(function(response){
        console.log(response)
        var questionsContent = "# **Github:** " + "\n" +  response.github 
        questionsContent = questionsContent + "\n"
        questionsContent = "\n" + questionsContent + "\n" + "# **Email:** " + "\n" + response.email



        fs.appendFile("README.md", questionsContent, function(err){
            if(err){
                console.log(err)
            }
            console.log("Success!")
            

            

        })
    })
}

function licenseArea(){

    inquirer
        .prompt([
            {
                type: "checkbox",
                choices: ["MIT", "Kambrian", "ECL", "Apache"],
                name: "license"
            }
        ]).then(function(response){
            console.log(response)
            var licenseInfo = "# **Licensing:**" + "\n" + response.license[0] + ", " + response.license[1] + ", " + response.license[2] + ", " + response.license[3]
            
            fs.appendFile("README.md", licenseInfo, function(err){
                if(err){
                    console.log(err)
                }
                console.log("Success!")
        })
})}

licenseArea()

// function loadReadme(){
//     basicDescription()
    
// }then(function(){
//     questionsArea()
// })

// loadReadme()
