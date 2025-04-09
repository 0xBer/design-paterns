import { SimpleFactory } from "./SimpleFactory";
import { LandLogisctics, SeaLogisctics, AirLogisctics } from "./Factory";

// Simple factory
const simpleFactory = new SimpleFactory();

const truck1 = simpleFactory.createLogistics("land");
truck1.deliver();

const ship1 = simpleFactory.createLogistics("sea");
ship1.deliver();

const plane1 = simpleFactory.createLogistics("air");
plane1.deliver();

// Factory
const truck2 = new LandLogisctics();
truck2.planDelivery();

const ship2 = new SeaLogisctics();
ship2.planDelivery();

const plane2 = new AirLogisctics();
plane2.planDelivery();