class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    render() {
        console.log("Drawing the circle");
    }
}
new Circle("Green").render();
