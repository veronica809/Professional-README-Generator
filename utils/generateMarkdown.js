
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license){
    let yourLicense=""
    if(license === 'MIT') {
      yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
      
    } else if (license === 'GPLv3') {
      yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    } else if (license === 'GPL') {
      yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    } 
    return yourLicense;
  }else{
    return "";
  }

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    let yourLicense=""
    if(license === 'MIT') {
      yourLicense = `https://www.mit.edu/~amini/LICENSE.md`
    } else if (license === 'GPLv3') {
      yourLicense = `https://www.gnu.org/licenses/gpl-3.0.en.html`
    } else if (license === 'GPL') {
      yourLicense = `https://en.wikipedia.org/wiki/GNU_General_Public_License`
    } 
    return yourLicense;
  }else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(bad ,lk) {
  if (bad && lk){
    return `
## License
${bad}
${lk}
    `


  }else{
    return "";
  }

}

// TODO: Create a function to generate markdown for README
async function generateMarkdown(data) {

  let badge = renderLicenseBadge(data.license)
  let link = renderLicenseLink(data.license)

  // let licSection= {
  //   badge:badge,
  //   link:link
  // }
  // let licenseSection = renderLicenseSection(licSection)

  let licenseSection = renderLicenseSection(badge, link)
console.log(licenseSection)

  return `
# ${data.title}

## Table of Content
-[Project description](#Description)
-[Usage](#Usage)
-[Contribution](#Contribution)
-[Installation](#Installation)
-[Questions](#Questions)
-[License](#License)

## Description
${data.description}

## Usage
${data.usage}

## Installation
${data.installation}

## Contribution
${data.contributing}

## Questions
${data.email}
${data.github}

${licenseSection}


  `;
};



module.exports = generateMarkdown;
