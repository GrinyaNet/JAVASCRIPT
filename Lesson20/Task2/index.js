class Vehicle {
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = name;
    }
    
    move() {
        console.log(`${this.name} is moving`);
    }
    stop() {
        console.log(`${this.name} stopped`);
    }
};

class Ship extends Vehicle {
    constructor(name, numberOfWheels, maxSpeed) {
        super(name, false);
        this.numberOfWheels = numberOfWheels;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log(`${this.name} lifting anchor up`);
        super.move();
        
    }
   
    stop() {
        super.stop();
        console.log(`${this.name} lifting anchor down`);
        
    }
    
};
const ship1 = new Ship('Avrora', 0, 17);
ship1.stop();
//console.log(ship1);