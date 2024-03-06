const m = 10;
const n = 15;
let result = 1;

for( let h = m; h <= n; h++) {
    if (h % 2 === 1) {
        result *= h;
    }
}
console.log(result);