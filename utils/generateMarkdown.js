// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeImageUrl;
  switch (license) {
    case "No License":
      badgeImageUrl = ""
      break;

    case "Apache 2.0 License":
      badgeImageUrl = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "Boost":
      badgeImageUrl = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case "BSD 3-Clause License":
      badgeImageUrl = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;

    case "BSD 2-Clause License":
      badgeImageUrl = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;

    case "CC0":
      badgeImageUrl = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;

    case "Attribution 4.0 International":
      badgeImageUrl = "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)";
      break;

    case "Attribution-ShareAlike 4.0 International":
      badgeImageUrl = "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)";
      break;

    case "Attribution-NonCommercial 4.0 International":
      badgeImageUrl = "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)";
      break;

    case "Attribution-NoDerivates 4.0 International":
      badgeImageUrl = "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)";
      break;

    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      badgeImageUrl = "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)";
      break;

    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      badgeImageUrl = "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)";
      break;

    case "Eclipse Public License 1.0":
      badgeImageUrl = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;

    case "GNU GPL v3":
      badgeImageUrl = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    case "GNU GPL v2":
      badgeImageUrl = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;

    case "GNU AGPL v3":
      badgeImageUrl = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;

    case "GNU LGPL v3":
      badgeImageUrl = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      break;

    case "GNU FDL v1.3":
      badgeImageUrl = "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)";
      break;

    case "The Hippocratic License 2.1":
      badgeImageUrl = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)";
      break;

    case "The Hippocratic License 3.0":
      badgeImageUrl = "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
      break;

    case "IBM Public License Version 1.0":
      badgeImageUrl = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;

    case "ISC License (ISC)":
      badgeImageUrl = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      break;

    case "The MIT License":
      badgeImageUrl = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;

    case "Mozilla Public License 2.0":
      badgeImageUrl = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "Attribution License (BY)":
      badgeImageUrl = "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      break;

    case "Open Database License (ODbL)":
      badgeImageUrl = "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
      break;

    case "Public Domain Dedication and License (PDDL)":
      badgeImageUrl = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
      break;

    case "The Perl License":
      badgeImageUrl = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;

    case "The Artistic License 2.0":
      badgeImageUrl = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
      break;

    case "SIL Open Font License 1.1":
      badgeImageUrl = "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
      break;

    case "The Unlicense":
      badgeImageUrl = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;

    case "The Do What the Fuck You Want to Public License":
      badgeImageUrl = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
      break;

    case "The zlib/libpng License":
      badgeImageUrl = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
      break;

    default:
      return "";
  }
  return badgeImageUrl;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {

    case "No License":
      badgeImageUrl = ""
      break;

    case "Apache 2.0 License":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;

    case "BSD 3-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "BSD 2-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;

    case "CC0":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/";
      break;

    case "Attribution 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by/4.0/";
      break;

    case "Attribution-ShareAlike 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-sa/4.0/";
      break;

    case "Attribution-NonCommercial 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc/4.0/";
      break;

    case "Attribution-NoDerivates 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nd/4.0/";
      break;

    case "Attribution-NonCommmercial-ShareAlike 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc-sa/4.0/";
      break;

    case "Attribution-NonCommercial-NoDerivatives 4.0 International":
      licenseLink = "https://creativecommons.org/licenses/by-nc-nd/4.0/";
      break;

    case "Eclipse Public License 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;

    case "GNU GPL v3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;

    case "GNU GPL v2":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;

    case "GNU AGPL v3":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0";
      break;

    case "GNU LGPL v3":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0";
      break;

    case "GNU FDL v1.3":
      licenseLink = "https://www.gnu.org/licenses/fdl-1.3";
      break;

    case "The Hippocratic License 2.1":
      licenseLink = "https://firstdonoharm.dev";
      break;

    case "The Hippocratic License 3.0":
      licenseLink = "https://firstdonoharm.dev";
      break;

    case "IBM Public License Version 1.0":
      licenseLink = "https://opensource.org/licenses/IPL-1.0";
      break;

    case "ISC License (ISC)":
      licenseLink = "https://opensource.org/licenses/ISC";
      break;

    case "The MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;

    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;

    case "Attribution License (BY)":
      licenseLink = "https://opendatacommons.org/licenses/by/";
      break;

    case "Open Database License (ODbL)":
      licenseLink = "https://opendatacommons.org/licenses/odbl/";
      break;

    case "Public Domain Dedication and License (PDDL)":
      licenseLink = "https://opendatacommons.org/licenses/pddl/";
      break;

    case "The Perl License":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;

    case "The Artistic License 2.0":
      licenseLink = "https://opensource.org/licenses/Artistic-2.0";
      break;

    case "SIL Open Font License 1.1":
      licenseLink = "https://opensource.org/licenses/OFL-1.1";
      break;

    case "The Unlicense":
      licenseLink = "http://unlicense.org/";
      break;

    case "The Do What the Fuck You Want to Public License":
      licenseLink = "http://www.wtfpl.net/about/";
      break;

    case "The zlib/libpng License":
      licenseLink = "https://opensource.org/licenses/Zlib";
      break;

    default:
      return "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License") {
    return "";
  }
  return `## License\n
  This project uses the ${renderLicenseBadge(license)} license, you can find more information here: ${renderLicenseLink(license)}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let Contact = data.Questions.split(",");
  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}
  ## Description 
  ${data.Description}

  ## Table of contents
  ${data.TableofContents}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Credits
  ${data.Credits}

  
  ${renderLicenseSection(data.License)}

  ## Features
  ${data.Features}

  ## How to Contribute
  ${data.HowtoContribute}

  ## Questions 
  Github: [@${Contact[0]}](https://www.github.com/${Contact[0]})\n
  Email: ${Contact[1]}\n


`;
}

module.exports = generateMarkdown;
