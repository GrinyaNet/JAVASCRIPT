
function sum(from, to) {
    // put your code here
    let result = 0;
    for (from; from <= to; from++) {
        result += from;
    }
    return result;
  }

  console.log(sum(5, 10)); // ===> 45
  console.log(sum(11, 11)); // ===> 11


  function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
    // hint: you should use sum function inside compareSums
    // put your code here
    return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
  }

console.log(compareSums(5, 10, 5, 10)); // ===> false
console.log(compareSums(5, 15, 3, 5)); // ===> true
console.log(compareSums(-2, 5, 5, 9)); // ===> false
