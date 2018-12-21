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

const cardText = chalk`{hex('#FFEFD5') Dyl Reynard /} {hex('#00BFFF') @dyyyl}

     {hex('#FFEFD5').bold Work: } {hex('#FFEFD5') Wandering Web Engineer}
      {hex('#FFEFD5').bold NPM: } {hex('#00BFFF') https://www.npmjs.com/~dyyyl}
  {hex('#FFEFD5').bold Twitter: } {hex('#00BFFF') https://twitter.com/dyyyyyyyyyl}
   {hex('#FFEFD5').bold Github: } {hex('#00BFFF') https://github.com/dyyyl}
 {hex('#FFEFD5').bold LinkedIn: } {hex('#00BFFF') https://www.linkedin.com/in/dyyyl/}
      {hex('#FFEFD5').bold Web: } {hex('#00BFFF') https://dyyyl.rocks}

     {hex('#FFEFD5').bold Card: } {hex('#FFEFD5') npx dyyyl}`;

console.log(chalk.hex("#db7093")(boxen(cardText, options)));
