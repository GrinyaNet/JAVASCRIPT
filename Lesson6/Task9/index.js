const reversArray = (arr) => {

    let newarr = [];

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {

        newarr.unshift(arr[i]);
        
    }

    return newarr;
}

console.log(reversArray([10, 10, 10])); // ===> false
console.log(reversArray([10, 99, 1])); // ===> true
console.log(reversArray([-6, -3, 200])); // ===> true
