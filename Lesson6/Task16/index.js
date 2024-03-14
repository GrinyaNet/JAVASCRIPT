function removeDuplicates(array) {

    //let newarr = [];


    if (!Array.isArray(array)) {
        return null;
    }

    let newarr = array.filter((item, index) => {
        return array.indexOf(item) === index;
    })
    return newarr;
}

console.log(removeDuplicates([2, 5, 6, 8, 11, 5, 4, 20])); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(removeDuplicates([7, 1, 11, 1, 10]));