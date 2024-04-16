const user = {
    age: 17,
    name: 'Tom',
    name1: 'Argo',
    move() {
        console.log(`${this.name} is moving`);
    },
};

function getOwnProps(obj) {

    const arr = [];
    let filteredObj = {};

    for (let key in obj) {
        if (typeof (obj[key]) !== 'function') {
            filteredObj[key] = obj[key];
        }
    }

    for (let prop in filteredObj) {

        if (obj.hasOwnProperty(prop)) {
            arr.push(prop);
        }
    }
    
    return arr;
};

//getOwnProps(user);
console.log(getOwnProps(user));


