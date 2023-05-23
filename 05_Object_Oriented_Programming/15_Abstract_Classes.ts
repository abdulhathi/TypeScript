abstract class Shape {
    constructor(public color: string) {}
    abstract render(): void
}

class Circle extends Shape {
    override render(): void {
        console.log("Drawing the circle");
    }
}

new Circle("Green").render();