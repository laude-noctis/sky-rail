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
        name: "colorText",
        message: "Enter a color for the text:",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose triangle, circle, or square:",
        choices: ["triangle", "circle", "square"],
    },
    {
        type: "input",
        name: "colorShape",
        message: "Enter a color for the shape:",
    },
];

const generateSvgContent = ({ text, colorText, shape, colorShape }) =>
`<svg>
<text fill="${colorText}">${text}</text>
<${shape} fill="${colorShape}"></${shape}>
</svg>`;


function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Generated ${fileName}! :)`);
        }
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
      const svgContent = generateSvgContent(answers);
      writeToFile("logo.svg", svgContent);
    });
}

init()