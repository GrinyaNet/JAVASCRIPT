let start = 0;
let end = 1000;
let sum = 0;
let result = 0;
let resultmod = 0;

for (start; start <= end; start++) {
sum += start;
}

console.log(sum);
result = sum / 1024;
resultmod = (sum % 1024);
result = result - resultmod;
//sum = (sum % 1024);
console.log(result > resultmod);
//console.log(result);
//console.log(resultmod);