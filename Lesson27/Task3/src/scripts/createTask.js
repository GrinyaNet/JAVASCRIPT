import {listElem, renderTasks} from './updateTask.js';
//import {tasks} from './storage.js';


export const createTask = (tasks) => {
let addMessage = document.querySelector('.task-input');
const addButton = document.querySelector('.create-task-btn');
addButton.addEventListener('click', function () {
    if (addMessage.value === '') {
        return;
    }

    let newMessade = {
        text: addMessage.value,
        done: false,
    };
    tasks.push(newMessade);    
    addMessage.value = '';
    listElem.innerHTML = '';
    renderTasks(tasks);
})
return console.log('NNNNNNNNN')
};