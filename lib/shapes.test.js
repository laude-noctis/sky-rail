const { Triangle, Circle, Square } = require("./shape.js");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should select the color of the triangle", () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
  });

  describe("Circle", () => {
    it("should select the color of the circle", () => {
      const circle = new Circle();
      circle.setColor("orange");
      expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="50" fill="orange" />`);
    });
  });

  describe("Square", () => {
    it("should select the color of the square", () => {
      const square = new Square();
      square.setColor("green");
      expect(square.render()).toEqual(`<rect x="0" y="0" width="200" height="200" fill="green" />`);
    });
  });
});