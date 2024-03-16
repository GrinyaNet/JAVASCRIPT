const increaseEvenEl = (arr, delta) => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newarr = arr.map(item => {
        item += delta;
        return item;
    })
    return newarr;
}

console.log(increaseEvenEl([2, 5, 6, 8], 4));