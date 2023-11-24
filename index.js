const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for logo:",
    },
    {
        type: "input",
        name: "color-text",
        message: "Enter a color for the text:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose triangle, circle, and square:",
        choices: ["triangle",
        "circle",
        "square"]
    },
    {
        type: "input",
        name: "color-shape",
        message: "Enter a color for the shape:",
    }
]