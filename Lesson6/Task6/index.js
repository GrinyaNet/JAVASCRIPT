/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
    // put your code here
    let newarr = [];
    
    if (!Array.isArray(arr)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
      newarr.push(arr[i] ** 2);      
    }
    return newarr;
  }
  
  // examples
  console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
  console.log(squareArray([10, 0, -4])); // ==> [100, 0, 16]
  console.log(squareArray([1])); // ==> [1]
  