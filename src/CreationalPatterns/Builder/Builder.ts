class House {
    walls?: string;
    roof?: string;
    pool?: string;

    describe() {
        console.log(`${this.walls}, ${this.roof}, ${this.pool}`);
    }
}

interface IHouseBuilder {
    buildWalls(): this;
    buildRoof(): this;
    buildPool(): this;
    getResult(): House;
}

class SimpleHouseBuilder implements IHouseBuilder {
    private house: House = new House();
    buildWalls(): this {
        this.house.walls = "Brick walls";
        return this;
    }
    buildRoof(): this {
        this.house.roof = "Wooden roof";
        return this;
    }
    buildPool(): this {
        return this;
    }
    getResult(): House {
        return this.house;
    }
}

class LuxuryHouseBuilder implements IHouseBuilder {
    private house: House = new House();
    buildWalls(): this {
        this.house.walls = "Golden walls";
        return this;
    }
    buildRoof(): this {
        this.house.roof = "Golden roof";
        return this;
    }
    buildPool(): this {
        this.house.pool = "Golden pool"
        return this;
    }
    getResult(): House {
        return this.house;
    }
}

class Director {
    constructor(private builder: IHouseBuilder) { }

    buildSimpleHouse() {
        return this.builder.buildWalls().buildRoof().getResult()
    }

    buildLuxuryHouse() {
        return this.builder.buildWalls().buildRoof().buildPool().getResult()
    }
}

const luxuryBuilder = new LuxuryHouseBuilder();
const director = new Director(luxuryBuilder);
const house = director.buildLuxuryHouse();
house.describe();

const simpleHouse = new Director(new SimpleHouseBuilder()).buildSimpleHouse().describe();
