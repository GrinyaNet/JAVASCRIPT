const getSubArray = (arr, numberOfElements) => {

    let result = [];

    for (let i = 0; i < numberOfElements; i++) {
result.push(arr[i]);
    }
return result;
}

console.log(getSubArray([11, 4, 8, 3], 2));
// **Пример работы:**
// Input: getSubArray([11, 4, 8, 3], 2)
// Output: [11, 4]

console.log(getSubArray([1, 2, 3, 4, 5], 3));
// Input: getSubArray([1, 2, 3, 4, 5], 3)
// Output: [1, 2, 3]