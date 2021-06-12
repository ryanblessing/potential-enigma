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
function generateMarkdown(userQuestions) {
  return `# ${userQuestions.title}

  ## Description
  ${userQuestions.description}
  *${userQuestions.language}

  ### What did I Learn?
  ${userQuestions.learning}

  ### GitHub Link
  ${userQuestions.link}

  ## Table of Contents
  [Installation](#installation)
  [Contribution](#contribution)
  [Tests](#tests)
  [Licenses](#license)
  [Email](#email)

  ### Installation
  ${userQuestions.installation}

  ### Contribution
  ${userQuestions.contribution}

  ### Testing
  ${userQuestions.tests}

  ### Licensing 
  ${userQuestions.licenses}

  ### Connect With Me
  For any and all questions please email me @${userQuestions.email} or ${userQuestions.link} Thank you!
  `;
}

module.exports = generateMarkdown();
