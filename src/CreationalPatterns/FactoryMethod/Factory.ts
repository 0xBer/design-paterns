interface Shape {
	draw(): void;
}

class Circle implements Shape {
	draw(): void {
		console.log("Drawing a Circle");
	}
}

class Square implements Shape {
	draw(): void {
		console.log("Drawing a Square");
	}
}

class Triangle implements Shape {
	draw(): void {
		console.log("Drawing a Triangle");
	}
}

class ShapeFactory {
	static createShape(type: string): Shape {
		switch (type.toLowerCase()) {
			case "circle":
				return new Circle();
			case "square":
				return new Square();
			case "triangle":
				return new Triangle();
			default:
				throw new Error("Unknown shape type");
		}
	}
}

const shape1 = ShapeFactory.createShape("circle");
shape1.draw();

const shape2 = ShapeFactory.createShape("triangle");
shape2.draw();
