const { Shape, Triangle, Circle, Square } = require("./shape.js");

describe("Shape", () => {
    describe("Triangle", () => {
      it("should change the color of the triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });