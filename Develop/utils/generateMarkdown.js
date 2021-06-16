
// TODO: Create a function that returns a license badge based on which license is passed in
 
const renderLicenseBadge = licenses =>{
   if(!licenses) {
     return ''
   } 
   return `<img src="https://img.shields.io/badge/mybadge-${licenses}-blue" 
   alt="badge with license name"/>`
 }


 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
const renderLicenseLink =licenseLink => {
  if(!licenseLink) {
    return ''
  }
}

 // TODO: Create a function that returns the license section of README
 // If there is no license, return an empty string
 const renderLicenseSection = licenses => {
   if(!licenses) {
     return ''
   }
 }

 // TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
   return `#${data.title}

  ## Description
  ${data.description}
  *${data.language}

  ### What did I Learn?
  ${data.learning}

  ### GitHub Link
  ${data.link}

  ## Table of Contents
  [Installation](#installation)
  [Contribution](#contribution)
  [Tests](#tests)
  [Licenses](#license)
  [Email](#email)

  ### Installation
  ${data.installation}

  ### Contribution
  ${data.contribution}
  

  ### Testing
  ${data.tests}

  ### Licensing 
  ${renderLicenseBadge (data.licenses)}

  ### Connect With Me
  For any and all questions please email me @${data.email} or ${data.link} Thank you!
  `;
 }


 module.exports = generateMarkdown;