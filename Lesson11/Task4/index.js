const countOccurrences = (text, str) => {
    // put your code here
    if (str === '') {
        return null;
    }
    let sum = 0;
    let index = text.indexOf(str);
    while (index != -1) {
        index = text.indexOf(str, index + str.length);
        sum += 1;
    }

    return sum;

};

console.log(countOccurrences('abcd efgh  abc abcghghghabc fhgjfhabc', 'abc')); // =>4 ['Abcd\n efg\nH...']
console.log(countOccurrences('abcd efgh  abc abcghghghabc fhgjfhabc', '')); // =>4 ['Abcd\n efg\nH...']