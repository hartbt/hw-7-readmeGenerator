// functions generate license badge 
function licenseGenerateBadge(license){
  if (license !== "none"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } return "";
}



// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseGenerateBadge()}

  # **Description**

  ${data.description}

  # **Table of Contents**

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contact Me](#github, #email)

  # **Installation**

  ${data.installation}

  # **Usage**

  ${data.usage}

  # **License**

  ${data.license}

  # **Contribution**

  ${data.contribution}

  # **Tests**

  ${data.tests}
  
  # **Questions**

  ${data.questions}

  # **Contact Me**

  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
