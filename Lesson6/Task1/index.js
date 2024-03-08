function getArrayBounds(arr) {
    // put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
  }

const arrayBound = getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
console.log(arrayBound);
const arrayBound1 = getArrayBounds(10, 12, 14); // ==> null
console.log(arrayBound1);
const arrayBound2 = getArrayBounds([1]); // ==> [1, 1, 1]
console.log(arrayBound2);

