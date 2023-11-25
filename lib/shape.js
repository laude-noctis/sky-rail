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
      <polygon points="100,10 40,198 190,78" fill="${this.color}" />
      <text x="150" y="150" fill="${this.colorText}" text-anchor="middle" font-size="20">${this.text}</text>
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
          <text x="150" y="100" fill="${this.colorText}" text-anchor="middle" font-size="20">${this.text}</text>
        </svg>
      `;
    }
}


class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        const x = 50;
        const y = 50;
        const size = 200;

        return `
          <svg width="300" height="200">
            <rect x="${x}" y="${y}" width="${size + 100}" height="${size}" fill="${this.color}" />
            <text x="${x + size / 2}" y="${y + size / 2}" fill="${this.colorText}" text-anchor="middle" font-size="20">${this.text}</text>
          </svg>
        `;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
}