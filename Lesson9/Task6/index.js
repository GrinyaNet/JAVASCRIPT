const getPeople = obj => {
    // put your code here
    const newObj = {};
    for (let key in obj) {
newObj[key] = key;
    }
    return newObj
  };

  rooms = {
    room1: [
        {name: 'Jack'},
        {name: 'Jack1'},
        {name: 'Jack2'},
        {name: 'Jack3'},
    ],
    room2: [
        {name: 'Doom'},
        {name: 'Doom1'},
        {name: 'Doom2'},
        {name: 'Doom3'},
    ],
    room3: [
        {name: 'Ork'},
        {name: 'Ork1'},
        {name: 'Ork2'},
        {name: 'Ork3'},
    ],
  };

  console.log(getPeople(rooms));