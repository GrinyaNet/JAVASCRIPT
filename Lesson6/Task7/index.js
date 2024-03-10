const checkSum = arr => {
    // put your code here
    let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return (sum > 100);
  };
  
  // examples
  console.log(checkSum([10, 10, 10])); // ===> false
  console.log(checkSum([10, 99, 1])); // ===> true
  console.log(checkSum([-6, -3, 200])); // ===> true
  