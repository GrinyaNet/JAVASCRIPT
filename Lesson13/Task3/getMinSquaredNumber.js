export const getMinSquaredNumber = arr => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
let numArr = Math.abs(arr[0]);

    for(let i of arr) {
if (numArr > Math.abs(i)) {
    numArr = Math.abs(i);
    i += 1;
}
    };
    return numArr *= numArr;
};

console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20]));