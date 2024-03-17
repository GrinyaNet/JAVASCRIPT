const arrAverage = arr => {
    // put your code here
    //let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
let sumArr = arr.reduce(function (a, b) {    
    return a + b;
})
   
return sumArr / arr.length;
  };

  console.log(arrAverage([2, 5, 6, 3])); //=>4