let memo = {};

const maxFibonacci1 = n => {
    if (n in memo)
        return memo[n];
    if (n <= 1)
        return n;
    memo[n] = maxFibonacci1(n - 1) + maxFibonacci1(n - 2);
    return memo[n];
}

console.log(maxFibonacci1(10)); // Вывод: 55
console.log(memo);

// function fibonacciLoop(n) {
//     if (n <= 1)
//         return n;

//     let a = 0, b = 1;
//     let temp;
//     for (let i = 2; i <= n; i++) {
//         temp = b;
//         b = a + b;
//         a = temp;

//     }
//     return b;
// }

// console.log(fibonacciLoop(10));


const maxFibonacci = n => {
    const arr = [];
    let prev = 0, next = 1;
    for (let i = 0; i < n; i++) {
        let temp = next;
        next = prev + next;
        prev = temp;        
        if (prev <= n) {
            arr.push(prev);
        }

    }
    
    const maxElem = Math.max(...arr);
    return maxElem;
}

console.log(maxFibonacci(8));