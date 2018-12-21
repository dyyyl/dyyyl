#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require("boxen");
const chalk = require("chalk");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("Dyl Reynard /"),
  handle: chalk.cyan("@dyyyl"),
  work: chalk.white("Wandering Web Engineer"),
  npm: chalk.cyan("https://www.npmjs.com/~dyyyl"),
  twitter: chalk.cyan("https://twitter.com/dyyyyyyyyyl"),
  github: chalk.cyan("https://github.com/dyyyl"),
  linkedin: chalk.cyan("https://www.linkedin.com/in/dyyyl/"),
  web: chalk.cyan("https://dyyyl.rocks"),
  npx: chalk.white("npx dyyyl"),
  labelWork: chalk.white.bold("      Work:"),
  labelNPM: chalk.white.bold("       NPM:"),
  labelTwitter: chalk.white.bold("   Twitter:"),
  labelGitHub: chalk.white.bold("    GitHub:"),
  labelLinkedIn: chalk.white.bold("  LinkedIn:"),
  labelWeb: chalk.white.bold("       Web:"),
  labelCard: chalk.white.bold("      Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const npming = `${data.labelNPM}  ${data.npm}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  npming +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding;

console.log(chalk.green(boxen(output, options)));
