import { createTask } from './createTask.js';
import { todoList } from './todoList.js';
import { tasks } from './storage.js';
import { renderTasks } from './updateTask.js';

 document.addEventListener('DOMContentLoaded', () => {     
     renderTasks(tasks);
     createTask(tasks);
     todoList(tasks);
   });

   window.addEventListener('storage', renderTasks);

//renderTasks(tasks);
    //createTask(tasks);
    //todoList(tasks);
    //initTodoListHandlers();

// const tasks = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];

// export const listElem = document.querySelector('.list');

// export const renderTasks = tasksList => {
//     const tasksElems = tasksList
//         .sort((a, b) => a.done - b.done)
//         .map(({ text, done }) => {
//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');
//             const checkbox = document.createElement('input');
//             checkbox.setAttribute('type', 'checkbox');
//             checkbox.checked = done;
//             checkbox.classList.add('list__item-checkbox');
//             if (done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//             listItemElem.append(checkbox, text);

//             return listItemElem;
//         });

//     listElem.append(...tasksElems);
// };

//renderTasks(tasks);

// put your code here
//createTask(tasks);
//todoList(tasks);
// let addMessage = document.querySelector('.task-input');
// const addButton = document.querySelector('.create-task-btn');
// addButton.addEventListener('click', function () {
//     if (addMessage.value === '') {
//         return;
//     }

//     let newMessade = {
//         text: addMessage.value,
//         done: false,
//     };
//     tasks.push(newMessade);
//     console.dir(tasks);
//     addMessage.value = '';
//     listElem.innerHTML = '';
//     renderTasks(tasks);
// })!!!

// listElem.addEventListener('click', function () {

//      let newCheck = Array.from(document.querySelectorAll('.list__item-checkbox'));
//      newCheck.forEach((checkbox, index) => {
//          checkbox.dataset.id = index;
//      })


//         newCheck.forEach((checkbox) => {
//             let ind = 0;
//             if (checkbox.checked) {
//                 ind = checkbox.dataset.id;
//                 tasks[Number(ind)].done = true;
//             } else {
//                 ind = checkbox.dataset.id;
//                 tasks[Number(ind)].done = false;
//             }


//          listElem.innerHTML = '';
//          renderTasks(tasks); 

// });
// });!!!


console.log('Hello!!!');
