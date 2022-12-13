class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return 'HONK!';
    }

    toString() {
        return `Your vehichle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    super(make, model, year);

    constructor(numWheels) {
        numWheels = 4;
    }  
}

class Motorcycle extends Vehicle {
    super(make, model, year);
    constructor(numWheels) {
        numWheels = 2;
    }

    revEngine() {
        return 'VROOM!!'
    };
}

class Garage {
    constructor(vehicles) {
        capacity = 8;
        vehicles = [];
    }

    add() {
        for(let vehicles of Car) {
            if(vehicles != Car || Motorcycle) {
                throw new Error('Only vehicles are allowed in here!');
            }

            new vehicles = vehicles.push(Car, Motorcycle);
        }
    }
}