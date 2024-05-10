

 //const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const setArr = (tasks) => {
    
    localStorage.setItem('tasksList', JSON.stringify(tasks));
};

export const getArr = () => {    
    const t = JSON.parse(localStorage.getItem('tasksList')) || [];
    //console.log(t);
    if (t.length !== 0) {
    const tasks = t.slice();
    return tasks;
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