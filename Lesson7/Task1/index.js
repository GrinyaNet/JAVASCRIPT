const getSpecialNumbers = numbers => {
return numbers.filter( num => num % 3 === 0);
};

console.log(getSpecialNumbers([2, 5, 6, 8, 11, 9, 4]));