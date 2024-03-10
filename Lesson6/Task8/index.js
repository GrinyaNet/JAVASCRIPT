const increaseEvenEl = (arr, delta) => {
    // put your code here
    let newarr = [];
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] % 2 === 0) {
            newarr.push(arr[i] + delta);
        } else {
            newarr.push(arr[i]);
        }
      }

      return newarr;
  };
  
  // examples
  console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
  console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
  console.log(increaseEvenEl([], 120)); // ===> []
  