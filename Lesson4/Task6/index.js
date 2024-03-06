const start = 5;
const end = 50;
let result = 0;
let i = start;

for (i; i <= end; i++) {
  if (i % 5 === 0) {
    console.log(i);
    break;
  }
  if (i % 2 === 0 && i % 4 === 1) {
    result += i;
    console.log(result);
    break;
  }
  if (i % 3 === 0) {
    result -= i;
    console.log(result);
    break;
  }
  if (i % 4 === 0) {
    result *= i;
    console.log(result);
    break;
  }
}
