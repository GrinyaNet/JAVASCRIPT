export function createArrayOfFunctions (num) {
let arr = [];
 if (arguments.length === 0) {
     return arr;
 } else {
    if (isNaN(Number(num))) {
        return null;
    }
 }
for(let i = 0; i < num; i++) {
arr[i] = function () {
    return i;
}
} 

return arr;
};

//console.log(createArrayOfFunctions(9)[5]());  // 
console.log(createArrayOfFunctions());  // 
//console.log(createArrayOfFunctions([5]));  // 5