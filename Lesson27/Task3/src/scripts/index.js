//import { getArr, setArr } from './storage.js';

 
const tasks = JSON.parse(localStorage.getItem('tasksList')) || [];

//const tasks = getArr();


const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
    
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here

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
    localStorage.setItem('tasksList', JSON.stringify(tasks));
    //setArr(tasks);
    console.dir(tasks);
    addMessage.value = '';
    listElem.innerHTML = '';
    renderTasks(tasks);
    
})

listElem.addEventListener('click', function () {

     let newCheck = Array.from(document.querySelectorAll('.list__item-checkbox'));
     newCheck.forEach((checkbox, index) => {
         checkbox.dataset.id = index;
     })
     
     
        newCheck.forEach((checkbox) => {
            let ind = 0;
            if (checkbox.checked) {
                ind = checkbox.dataset.id;
                tasks[Number(ind)].done = true;
                localStorage.setItem('tasksList', JSON.stringify(tasks));
                //setArr(tasks);
                
            } else {
                ind = checkbox.dataset.id;
                tasks[Number(ind)].done = false;
                localStorage.setItem('tasksList', JSON.stringify(tasks));
                //setArr(tasks);
                
            }

        
         listElem.innerHTML = '';
         renderTasks(tasks); 
         
});
});
document.addEventListener('DOMContentLoaded', renderTasks(tasks));
   


//window.addEventListener('storage', renderTasks(tasks));