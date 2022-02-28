// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, link, color) {
  if (link)
    return `[![License](https://img.shields.io/badge/License-${license}-${color}.svg)](${link})`;

  return `![license](https://img.shields.io/badge/License-${license}-${color}.svg)`;
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Table of Contents

${data.tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

## Tests

${data.tests}

## Credits

${data.credits}

## License

${renderLicenseBadge(data.license, data.licenseLink, data.licenseBadgeColor)}

${data.licenseSection}

## Contributing

${data.contributingGuidelines}
`;
}
