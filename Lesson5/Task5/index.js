//let sum = 0;

function getIntervalSum(from, to) {
    // put your code here
    let sum = 0;
    for (from; from <= to; from++) {
        if (from % 2 === 0) {

          sum += from;
        }
    }
    return sum;
  }

console.log(getIntervalSum(0, 20)); // ===> 110
console.log(getIntervalSum(20, 25)); // ===> 66
console.log(getIntervalSum(120, 160)); // ===> 2940
