/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
    // put your code here
    let number = [];
    let accuracy = Math.pow(10, prec);
    
    let i = (Math.floor(num * accuracy)) / accuracy;
    number.push(i);
    
    i = (Math.trunc(num * accuracy)) / accuracy;
    number.push(i);

    i = (Math.ceil(num * accuracy)) / accuracy;
    number.push(i);

    i = (Math.round(num * accuracy)) / accuracy;
    number.push(i);

    i.toFixed(prec);
    number.push(i);
    return number;
  };
  
  // examples
  console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
  console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
  