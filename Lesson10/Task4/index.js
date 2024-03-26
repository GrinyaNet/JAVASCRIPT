'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  // put your code here
  if ((arr.length == 0) || (!Array.isArray(arr))) {   
    return null;
  }
const abselem = arr.map(num => Math.abs(num));
const max = Math.max(...abselem);

return max;
  
};

// examples
console.log(getMaxAbsoluteNumber([])); // ===> 10
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20])); // ===> 777
