
export const createCalculator = () => {
    // put your code here
    let memory = 0;

 function add(num) {    
    return memory += num;
}
 function decrease(num) {    
    memory -= num;
    return memory;
}

 function reset() {
    memory = 0;
    return memory;
}

 function getMemo() {    
    return memory;
}

return {
    add,
    decrease,
    reset,
    getMemo,
};

};
// const calculator = createCalculator();
// const calculatorNext = createCalculator();

// calculator.getMemo(); // 0
// calculator.add(3);
// console.log(calculator.getMemo()); // 3
// calculator.decrease(5);
// console.log(calculator.getMemo()); // -2

// calculatorNext.add(5);
// calculatorNext.getMemo(); // 5

// calculator.getMemo(); // -2
// calculator.reset();
// calculator.getMemo(); // 0

// calculatorNext.getMemo(); // 5
