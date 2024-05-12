const sum = n => {
    if(n < 1) return n;
    return Number.isInteger(10) ? n + sum(n-1) : n;
    }
    
    console.log(sum(4)); // 10