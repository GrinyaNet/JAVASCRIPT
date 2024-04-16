const getPeople = obj => {
    // put your code here
    //let arr = Object.entries(obj);
    //let arr = Array.from(obj)
    //let result = Object.values(obj).map(v => Object.values(v))
    //const result1 = Object.keys(obj).map((value, index) => Object.values(obj[value]));
    let arr = [];
    let result = Object.values(obj);
    //const result1 = result.forEach(el => arr.push[el]);
    //let result1 = result.map(num => (Object.values(num)));
    //     const newObj = {};

    
    //for (let key of result) {
        // for (let index of key) {
        //     let result1 = Object.values(index);
        //     arr.push(result1[0]);
                  //console.log(result1[0]);
    result.forEach(key => {const newArr = key.map(element => {return arr.push(element.name)})});
                  //arr.push(newArr);
                  //console.log(newArr);
                  //console.log(arr);
       // }


        //let result1 = Object.values(result[key]);
    //}
    //let newarr = []

    // for (let key of Object.keys(obj)) {
    //     const innerArr = []
    //     for (let value of Object.values(obj[key])) {
    //         innerArr.push(value)
    //     }
    //     newarr.push(innerArr)
    // }

    //console.log(newArr)

    //return newArr;
    return arr;
};

let rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Jack1' },
        { name: 'Jack2' },
        { name: 'Jack3' },
    ],
    room2: [
        { name: 'Doom' },
        { name: 'Doom1' },
        { name: 'Doom2' },
        { name: 'Doom3' },
    ],
    room3: [
        { name: 'Ork' },
        { name: 'Ork1' },
        { name: 'Ork2' },
        { name: 'Ork3' },
    ],
};

console.log(getPeople(rooms));