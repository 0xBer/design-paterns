interface ITransport {
	deliver(): void;
}

class Truck implements ITransport {
	deliver(): void {
		console.log("Deliver by Truck on Land");
	}
}

class Ship implements ITransport {
	deliver(): void {
		console.log("Deliver by Ship on Sea");
	}
}

class Plane implements ITransport {
	deliver(): void {
		console.log("Deliver by Plane on Sky");
	}
}

abstract class AbstractFactory {
	public abstract createLogistics(type: string): ITransport;
}

export class SimpleFactory extends AbstractFactory {
	public createLogistics(type: string): ITransport {
		switch (type) {
			case "land":
				return new Truck();

			case "sea":
				return new Ship();

			case "air":
				return new Plane();

			default:
				throw new Error("Unknown logistics type");
		}
	}
}