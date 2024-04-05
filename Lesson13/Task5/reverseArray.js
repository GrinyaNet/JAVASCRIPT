export const reversArray = (arr) => {
    
    if (!Array.isArray(arr)) {
        return null;
    }
    let copyArr = arr.slice();
   let newArr = copyArr.reverse();

    return newArr;
}

//console.log(reversArray([2, 5, 6, 3, 7, 10]));