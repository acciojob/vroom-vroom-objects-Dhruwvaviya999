// Complete the js code
// Car Constructor
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar Constructor (inherits from Car)
function SportsCar(make, model, topSpeed) {
    // Call Car constructor with .call() method to inherit properties
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Test the solution
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());   // Output: 200


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
