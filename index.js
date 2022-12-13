class Vehichle {
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

class Car {
    
}