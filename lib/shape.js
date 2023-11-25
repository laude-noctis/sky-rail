class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {

    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `
      <svg width="300" height="200">
      <polygon points="150,18 244,182 56,182" fill="${this.color}" />
      <text x="150" y="150" fill="${this.colorText}" text-anchor="middle" font-size="40">${this.text}</text>
      </svg>
        `;
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="${this.color}" />
          <text x="150" y="109" fill="${this.colorText}" text-anchor="middle" font-size="40">${this.text}</text>
        </svg>
      `;
    }
}


class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const size = 200;

        return `
    <svg width="300" height="200">
      <rect x="0" y="0" width="${size}" height="${size}" fill="${this.color}" />
      <text x="100" y="110" fill="${this.colorText}" text-anchor="middle" font-size="40">${this.text}</text>
    </svg>
  `;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
}