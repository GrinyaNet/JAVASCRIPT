const splitString = (text, len) => {

    if (typeof text !== "string") {
        return null;
    } 

    if (len === undefined ) {
        len = 10;
    }

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk.slice());
        startPosition += len;
    }
    let elem = strArr.pop();
    if (elem.length === len) {
strArr.push(elem);
    } else {    
    for (let i = elem.length; i < len; i++) {
        elem = elem + '.';
    }
    strArr.push(elem);
}    
return strArr;
};

console.log(splitString('abcd efgh', 4)); // => ['Abcd\n efg\nH...']