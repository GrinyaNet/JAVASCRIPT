const flatArray = arr => {
    let newArr = arr.flat();    
    newArr.sort((a, b) => a - b);
    return newArr;

};
  

  console.log(flatArray([2, 5, 6, 8, 11, 9, 4, [35, 10, 16]]));