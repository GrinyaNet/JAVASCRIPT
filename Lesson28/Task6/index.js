
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