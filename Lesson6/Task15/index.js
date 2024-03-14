const includes = (arr, num) => {
    // put your code here
    //console.log(arr[0]);
    let a = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (num === arr[i]) {
            return true;
        }
        else {
            a = false;
        }
    }
return a;
};

console.log(includes([1, 4, 8, 3], 3)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false