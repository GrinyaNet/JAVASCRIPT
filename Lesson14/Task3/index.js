let memory = 0;

export function add(num) {
    //let memory;
    //let memory = num;
    return memory += num;
}

export function decrease(num) {
    // let memory = 0;
    memory -= num;
    return memory;
}

export function reset() {
    memory = 0;
    return memory;
}

export function getMemo() {
    return memory;
}


console.log(add(5));
console.log(decrease(3));
console.log(getMemo());