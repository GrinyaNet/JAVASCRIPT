import {listElem, renderTasks} from './updateTask.js';

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
    localStorage.setItem('person', JSON.stringify(tasks));
    addMessage.value = '';
    listElem.innerHTML = '';
    renderTasks(tasks);
})
};