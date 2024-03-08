function swap(numbers) {
    // put your code here
    const [start, ...rest] = numbers;
    return [...rest, start];
  }
  
  /**
   * @param {number[]} numbers
   * @return {number[]}
   */
  function swapManual(numbers) {
    // put your code here
    const arr = numbers;
    const element = arr.shift();    
    arr.push(element);    

    return arr;
    
  }
  
  // examples
  console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  