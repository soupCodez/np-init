#!/usr/bin/env node
"use strict";
let inquirer = require("inquirer");
const fs = require("fs");

let questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the project?",
    default: function () {
      return "";
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of the project?",
    default: function () {
      return "";
    },
  },
  {
    type: "input",
    name: "author",
    message: "Who is the author of the project?",
    default: function () {
      return "";
    },
  },
  {
    type: "input",
    name: "version",
    message: "What is the version?",
    default: function () {
      return "1.0.0";
    },
  },
  {
    type: "input",
    name: "deps",
    message: "What are the dependencies?",
    default: function () {
      return "";
    },
  },
  {
    type: "input",
    name: "liscence",
    message: "What liscence is it?",
    default: function () {
      return "ISC";
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  const result = `
  {
    "name": "${answers.name}",
    "version": "${answers.version}",
    "description": "${answers.description}",
    "scripts": {},
    "author": "${answers.author}",
    "license": "${answers.liscence}",
    "keywords": [],
    "dependencies": {}
  }  
  `;
  console.log(result);
  fs.writeFile("pkg.json", result, () => {});
});
