const getAdults = usersObj => Object.entries(usersObj)
.filter(user => user[1] >= 18)
.map(user => user[0]);

console.log(getAdults({'J D':19, 'T': 17, 'B': 18}));