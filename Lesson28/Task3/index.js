//const sum = (a, b) => a + b;

// const sum = a => b => a + b;

// const add3 = sum(3);

// const result = add3;

const mult = a => b => a * b;

const twice = mult(2);

const triple = mult(3);

console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(9));