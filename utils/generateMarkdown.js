// functions generate license badge 
function licenseGenerateBadge(license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}

// ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

function licenseGenerateSection(license){
  if (license !== "none"){
    return (`## License
    
    This project is licensed under the ${license} license.`)
  }
}
// function licenseGenerateLink (license){
//   if (license !== "none"){
//     return (  `\n*[License](#license)
//     `)
//   } return "";
// }



// function to generate markdown for README

function generateMarkdown(data) {
  
  return `# ${data.title}

  ${licenseGenerateBadge(data.license)}

  # **Description**

  ${data.description}

  # **Table of Contents**

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  # **Installation**

  To install needed dependencies, run the following command:
  ${data.installation}


  # **Usage**

  ${data.usage}

  ${licenseGenerateSection(data.license)}


  # **License**

  This project is licensed by: ${data.license}


  # **Contribution**

  ${data.contribution}


  # **Tests**

  To run tests, run the following command:
  ${data.tests}
  

  # **Questions**

  GitHub: https://github.com/${data.github}
  \n
  Email : ${data.email}

`;
}

module.exports = generateMarkdown;
