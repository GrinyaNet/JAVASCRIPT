const splitText = (text, len) => {
    
    if (typeof text !== "string") {
        return null;
    } 
    
    if (len === undefined ) {
        len = 10;
    }
    const strArr = [];
    let startPosition = 0;
    //let length = 10;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
        if (chunk.length === 0) {
            break;
        }
    }
return strArr.join('\n');
};


console.log(splitText('abcd efgh', 4)); // => 'Abcd\n efg\nH...']