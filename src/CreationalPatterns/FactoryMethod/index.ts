import { SimpleFactory } from "./SimpleFactory";
import { LandLogistics, SeaLogistics, AirLogistics } from "./Factory";

// Simple factory
const simpleFactory = new SimpleFactory();

const truck1 = simpleFactory.createLogistics("land");
truck1.deliver();

const ship1 = simpleFactory.createLogistics("sea");
ship1.deliver();

const plane1 = simpleFactory.createLogistics("air");
plane1.deliver();

// Factory
const truck2 = new LandLogistics();
truck2.planDelivery();

const ship2 = new SeaLogistics();
ship2.planDelivery();

const plane2 = new AirLogistics();
plane2.planDelivery();