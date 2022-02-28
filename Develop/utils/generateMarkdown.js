// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "APACHE 2.0":
      return "![badmath](https://img.shields.io/badge/License-APACHE%202-blue)\n"
    case "BSD 3":
      return "![badmath](https://img.shields.io/badge/License-BSD%2f3.0-blue)\n"
    case "GPL 3.0":
      return "![badmath](https://img.shields.io/badge/License-GPL-blue)\n"
    case "MIT":
      return "![badmath](https://img.shields.io/badge/License-MIT-green)\n"
    default: return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "APACHE 2.0":
      return "https://opensource.org/licenses/APACHE-2.0\n"
    case "BSD 3":
      return "https://opensource.org/licenses/BSD-3-clause\n"
    case "GPL 3.0":
      return "https://opensource.org/licenses/GPL-3.0\n"
    case "MIT":
      return "https://opensource.org/licenses/MIT\n"
    default: return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return "This project is covered by the "+license+" License.\n"
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Find me on github @:
${data.github}

Email me @:
${data.email}

`;
}

module.exports = generateMarkdown;
