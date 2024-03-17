function squareArray(arr) {
    // put your code here
    if (!Array.isArray(arr)) {
        return null;
    }
    let sqrtArr = arr.map((num) => num ** 2);
    
    return sqrtArr;
  }
  
  // examples
  console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
  console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
  console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]
  