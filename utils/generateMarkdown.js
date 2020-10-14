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


  

  # **Installation**

  ${data.installation}

  # **Usage**

  ${data.usage}

  # **License**

  ${data.license}

  # **Contributing**

  ${data.contribution}

  # **Tests**

  ${data.tests}
  
  # **Questions**



  # **Contact Me**

  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
