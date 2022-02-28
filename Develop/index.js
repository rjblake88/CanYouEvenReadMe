#!/usr/bin/env node

// TODO: Include packages needed for this application
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import * as fs from "fs";
import * as path from "path";
// import libs
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title?",
  },
  {
    type: "input",
    name: "description",
    message: "Description?",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Table of contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage?",
  },
  {
    type: "input",
    name: "tests",
    message: "Tests?",
  },
  {
    type: "input",
    name: "credits",
    message: "Credits?",
  },
  {
    type: "input",
    name: "license",
    message: "License?",
    default: "MIT",
  },
  {
    type: "list",
    name: "licenseBadgeColor",
    message: "License badge color?",
    default: "blue",
    choices: [
      { name: "blue", value: "blue" },
      { name: "green", value: "green" },
      { name: "yellow", value: "yellow" },
      { name: "red", value: "red" },
    ],
  },
  {
    type: "input",
    name: "licenseLink",
    message: "License link?",
  },
  {
    type: "input",
    name: "licenseSection",
    message: "License section?",
  },
  {
    type: "input",
    name: "contributingGuidelines",
    message: "Contributing guidelines?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(filePath, data);
  return console.log(`${chalk.green("Successfully created")} ${fileName}`);
}

// sleep
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// welcome message
async function welcome() {
  const welcomeText = chalkAnimation.rainbow(`
    Welcome to Pro README Generator \n`);

  await sleep(2000);
  welcomeText.stop();

  console.log(`
    ${chalk.bgBlue("How to use ?\n")}
    ${chalk.cyanBright("Just fill out the prompts...😊")}
`);
}

// TODO: Create a function to initialize app
async function init() {
  // welcome message
  await welcome();
  // ask questions
  const answers = await inquirer.prompt(questions);
  // generate markdown
  const markdown = generateMarkdown(answers);
  // write to file
  const { fileName } = await inquirer.prompt({
    type: "input",
    name: "fileName",
    message: "What is the name of your README file?",
    default: "README.md",
  });
  writeToFile(fileName, markdown);
}

// Function call to initialize app
await init();
