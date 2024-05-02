export const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];
  localStorage.setItem('person', JSON.stringify(tasks));
localStorage.getItem('perse', JSON.parse(tasks));
//console.log(i);

// const storage = {};

// export const setItem = (key, value) => {
//     Object.assign(storage, { [key]: value });
//     //localStorage.setItem(key, JSON.stringify(value));
// };

// export const getItem = key => storage[key];
// //export const getItem = key => JSON.parse(localStorage.getItem(key));