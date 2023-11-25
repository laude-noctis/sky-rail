const { Triangle, Circle, Square } = require("./shape.js");

describe("Shape", () => {
  describe("Triangle", () => {
    it("should change the color of the triangle", () => {
      const triangle = new Triangle();
      triangle.setColor("blue");
      expect(triangle.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
  });
});