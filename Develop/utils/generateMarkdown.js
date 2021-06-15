 // TODO: Create a function that returns a license badge based on which license is passed in
 const licenseArray = ['ApacheLicense2', 'MIT', 'ISCLicense', 'GNUGPLv3', 'MozillaPublicLicense2', 'TheUnlicense', 'NoLicense']

 function renderLicenseBadge(license) {
   switch (licenseArray) {
     case "ApacheLicense2":
       return (`<img src="https://img.shields.io/badge/License-Apache%202.0-brightgreen"`)
     case "MIT":
       return (`<img src="https://img.shields.io/badge/License-MIT-brightgreen"`)
     case "ISCLicense":
       return (`<img src="https://img.shields.io/badge/License-ISC%20License%20-brightgreen"`)
     case "GNUGPLv3":
       return (`<img src="https://img.shields.io/badge/License-GNU%20GPLv3%20-brightgreen"`)
     case "MozillaPublicLicense2":
       return (`<img src="https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-brightgreen"`)
     case "The Unlicense":
       return (`<img src="https://img.shields.io/badge/License-The%20Unlicense-brightgreen"`)
     case "No License":
       return ([''])
   }

 }
/*const renderLicenseBadge = licenseChoices => {
  if(licenseChoices === licenseArray[0]) {
    return(`<img src="https://img.shields.io/badge/License-Apache%202.0-brightgreen"`)
  }
}
if(licenseChoices === licenseArray[1]) {
  return(`<img src="https://img.shields.io/badge/License-MIT-brightgreen"`)
}
if(licenseChoices === licenseArray[2]) {
  return(`<img src="https://img.shields.io/badge/License-ISC%20License%20-brightgreen"`)
}
if(licenseChoices === licenseArray[3]) {
  return(`<img src="https://img.shields.io/badge/License-GNU%20GPLv3%20-brightgreen"`)
}
if(licenseChoices === licenseArray[4]) {
  return(`<img src="https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-brightgreen"`)
}
if(licenseChoices === licenseArray[5]) {
  return(`<img src="https://img.shields.io/badge/License-The%20Unlicense-brightgreen"`)
}
if(licenseChoices === licenseArray[6]) {
  return(``)
}*/

 // TODO: Create a function that returns the license link
 // If there is no license, return an empty string
 function renderLicenseLink(license) {}

 // TODO: Create a function that returns the license section of README
 // If there is no license, return an empty string
 function renderLicenseSection(license) {}

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
  ${renderLicenseBadge(data.licenses)}

  ### Connect With Me
  For any and all questions please email me @${data.email} or ${data.link} Thank you!
  `;
 }


 module.exports = generateMarkdown;