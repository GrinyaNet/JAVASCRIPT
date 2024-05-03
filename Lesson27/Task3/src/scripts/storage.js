
export const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

export const getArr = (tasks) => {
    //const arr = [];
    const t = JSON.parse(localStorage.getItem('person')) || [];
    console.log(t);
    if (t.length !== 0) {
    return tasks = t.slice();
    }
    
}



//localStorage.setItem('person', JSON.stringify(tasks));
////const t = localStorage.getItem('person', JSON.parse(tasks));
//console.log(t);
//console.log(i);

// const storage = {};

// export const setItem = (key, value) => {
//     Object.assign(storage, { [key]: value });
//     //localStorage.setItem(key, JSON.stringify(value));
// };

// export const getItem = key => storage[key];
// //export const getItem = key => JSON.parse(localStorage.getItem(key));