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
        console.log("Deliver by Plane on Air");
    }
}

abstract class Logistics {
    protected abstract createTransport(): ITransport;

    public planDelivery(): void {
        const transport = this.createTransport();
        transport.deliver();
    }
}

export class LandLogistics extends Logistics {
    protected createTransport(): ITransport {
        return new Truck();
    }
}

export class SeaLogistics extends Logistics {
    protected createTransport(): ITransport {
        return new Ship();
    }
}

export class AirLogistics extends Logistics {
    protected createTransport(): ITransport {
        return new Plane();
    }
}