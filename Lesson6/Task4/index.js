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

    //let arr = [];
    //arr = numbers;
    let arr = numbers.slice();
    const element = arr.shift();    
    arr.push(element);    

    //return arr;
    return {result: arr, inpytArr: numbers };
    
  }
  
  // examples
  console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
  