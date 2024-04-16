const vehicle = {
    name: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} is stopped`);
    },
};

const ship = {
    name: 'Argo',     

    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
   
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
        
    },
    __proto__: vehicle
};

console.log(ship.stopMachine());