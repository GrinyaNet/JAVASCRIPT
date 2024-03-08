
function findDivCount(a, b, n) {
let result = 0;
    for (a; a <= b; a++) {

        if (a % n === 0) {
        result += 1;
        }
    }
    return result;
}

console.log(findDivCount(0, 10, 2));