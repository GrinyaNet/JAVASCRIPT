const getFinniteNumbers = arr => {     
    const newArr = [];
    arr.forEach(element => {
        if (Number.isFinite(element)) {                    
                     return newArr.push(element);
    }});
return newArr;
};

const getFinniteNumbersV2 = arr => {     
    const newArr = [];
    arr.forEach(element => {
        if (isFinite(element)) {                    
                     return newArr.push(element);
    }});
return newArr;
};

const getNaN = arr => {     
    const newArr = [];
    arr.forEach(element => {
        if (Number.isNaN(element)) {                    
                     return newArr.push(element);
    }});
return newArr;
};

const getNaNV2 = arr => {     
    const newArr = [];
    arr.forEach(element => {
        if (isNaN(element)) {                    
                     return newArr.push(element);
    }});
return newArr;
};

const getIntegers = arr => { 
    //const newArr = arr.slice();
    const newArr = [];
    arr.forEach(element => {
        if (Number.isInteger(element) !== true) {                    
                     return newArr.push(element);
    }});
return newArr;
};

//console.log(getFinniteNumbers([2, 5, 13.5, "14", 2, 0]));
//console.log(getNaNV2([2, 5, 13.5, "14", 2, NaN]));
console.log(getIntegers([2, 5, 13.5, "14", 2, NaN]));