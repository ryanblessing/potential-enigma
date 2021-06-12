// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.licenses}

  ### Connect With Me
  For any and all questions please email me @ ${data.email} Thank you!
  `;
}

module.exports = generateMarkdown;
