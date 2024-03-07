let start = 0;
let end = 1000;
let sum = 0;

for (start; start <= end; start++) {

    if (start % 2 !=0) {
        console.log('Found');
        sum += start;
    }
}
sum *= 5;

if (sum > 5000) {
    console.log('Bigger')
} else {
console.log('Smaller or equal') }