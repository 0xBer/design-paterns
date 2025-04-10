// Incapsulation
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} just made a sound`);
    }
}

// Inheritance
class Dog extends Animal {
    speak(): void {
        console.log("Woof"); // Polymorphism (overrided method)
    }
}

// Abstraction
abstract class Insect {
    abstract makeSound(): void;
}

class Mosquito extends Insect {
    makeSound(): void {
        console.log("Bzz");
    }

    doSomething(): void {
        console.log("Drink your blood");
    }
}

const mosquito = new Mosquito()
mosquito.makeSound();
mosquito.doSomething();