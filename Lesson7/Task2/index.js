const sortDesc = numbers => {
    let newArr = numbers.slice();
    newArr.sort((a, b) => b - a);
    return newArr;

    };

console.log(sortDesc([2, 5, 6, 8, 11, 9, 4]));