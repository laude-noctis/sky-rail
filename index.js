const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape.js")

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to 3 characters for logo:",
        validate: function (input) {
            if (input.length <= 3) {
                return true;
            } else {
                return "Must be 3 characters or less";
            }
        }
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
      var [x, y] = [150, 150];
    } else if (shape === "circle") {
      shapeInstance = new Circle(colorShape);
      var [x, y] = [150, 109];
    } else if (shape === "square") {
      shapeInstance = new Square(colorShape);
      var [x, y] = [100, 110];
    }
  
    shapeInstance.text = text;
    shapeInstance.colorText = colorText;
  
    function render() {
      return `
        <svg width="300" height="200">
          ${shapeInstance.render()}
          <text x="${x}" y="${y}" fill="${colorText}" text-anchor="middle" font-size="40">${text}</text>
        </svg>
      `;
    }
  
    return render();
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