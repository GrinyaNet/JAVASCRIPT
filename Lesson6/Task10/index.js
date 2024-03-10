const cloneArr = (arr) => {
    // put your code here
    let newarr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {

        newarr.push(arr[i]);
        
    }
//newarr = arr;

    return newarr;
};

console.log(cloneArr([2, 5, 6, 8, 11, 9, 4], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(cloneArr([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(cloneArr([], 120)); // ===> []