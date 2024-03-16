const cloneArr = arr => {
    if (!Array.isArray(arr)) {
        return null;
    }
    let newArr = arr.slice();
    return newArr;
}

console.log(cloneArr([2, 5, 6, 8, 4]));