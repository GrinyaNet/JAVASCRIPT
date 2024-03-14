function uniqueCount (array) {

    if (!Array.isArray(array)) {
        return null;
    }

    let newarr = array.filter((item, index) => {
        return array.indexOf(item) === index;
    })
    
    let number = newarr.length;
    return number;

}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])); // => 4