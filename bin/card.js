#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// You can also use tagged template literals with Chalk!
const cardText = chalk`
  {white Dyl Reynard /} {cyan @dyyyl}

     {white.bold Work:} {white Wandering Web Engineer}
      {white.bold NPM:} {cyan https://www.npmjs.com/~dyyyl}
  {white.bold Twitter:} {cyan https://twitter.com/dyyyyyyyyyl}
   {white.bold Github:} {cyan https://github.com/dyyyl}
 {white.bold LinkedIn:} {cyan https://www.linkedin.com/in/dyyyl/}
      {white.bold Web:} {cyan https://dyyyl.rocks}

    {white.bold Card:} {white npx dyyyl}`;

// PaleVioletRed box 🚀
console.log(chalk.hex('#db7093')(boxen(cardText, options)));
