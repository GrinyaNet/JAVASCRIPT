const sum = arr => {
    // put your code here
    //let sum = 0;
    if (!Array.isArray(arr)) {
        return null;
    }
let sumArr = arr.reduce(function (a, b) {
    return a + b;
})
   
return sumArr;
  };
  
  // examples
  console.log(sum([10, 10, 10])); // ===> false
  console.log(sum([10, 99, 1])); // ===> true
  console.log(sum([-6, -3, 200])); // ===> true
