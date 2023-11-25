const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape.js")

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

const generateSvgContent = ({ text, colorText, shape, colorShape }) => {
    let shapeInstance;

if (shape === "triangle") {
    shapeInstance = new Triangle(colorShape);
} else if (shape === "circle") {
    shapeInstance = new Circle(colorShape);
} else if (shape === "square") {
    shapeInstance = new Square(colorShape);
}

shapeInstance.setColor(colorShape);
shapeInstance.text = text;
shapeInstance.colorText = colorText;

return shapeInstance.render();
};


function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Generated ${fileName}! :)`);
        }
    });
};

function init() {
    inquirer.prompt(questions).then((answers) => {
      const svgContent = generateSvgContent(answers);
      writeToFile("logo.svg", svgContent);
    });
};

init();