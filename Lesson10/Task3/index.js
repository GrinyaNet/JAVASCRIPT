/**
 * @param {number} num
 * @return {number[]}
 */
const multiRound = num => {
    // put your code here
    
    let number = [];    
    
    let i = (Math.floor(num * 100)) / 100;
    number.push(i);
    
    i = (Math.trunc(num * 100)) / 100;
    number.push(i);

    i = (Math.ceil(num * 100)) / 100;
    number.push(i);

    i = (Math.round(num * 100)) / 100;
    number.push(i);

    i.toFixed(2);
    number.push(i);
    return number;
};

// examples
console.log(multiRound(11.12556)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(multiRound(6.112)); // ==> [6.11, 6.11, 6.12, 6.11, 6.11]
