const getParsedIntegers = arr => {     
    const newArr = [];
    arr.forEach(element => {
        let i = Number.parseInt(element);
        return newArr.push(i);
    });
return newArr;
};

const getParsedIntegersV2 = arr => {     
    const newArr = [];
    arr.forEach(element => {
        let i = parseInt(element);
        return newArr.push(i);
    });
return newArr;
};

const getParsedFloats = arr => {     
    const newArr = [];
    arr.forEach(element => {        
        return newArr.push(Number.parseFloat(element));
    });
return newArr;
};

const getParsedFloatsV2 = arr => {     
    const newArr = [];
    arr.forEach(element => {        
        return newArr.push(parseFloat(element));
    });
return newArr;
};

//console.log(getParsedIntegers([2, 5, 13.5, "14", 2, 0]));
console.log(getParsedFloatsV2([2, 5, 13.5, "14", 2, NaN]));
//console.log(getIntegers([2, 5, 13.5, "14", 2, NaN]));