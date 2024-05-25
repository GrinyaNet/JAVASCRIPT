import { createTask, getTasksList } from './tasksGateway.js';



const tasks = JSON.parse(localStorage.getItem('tasksList')) || [];



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
    createTask(tasks)
    .then(() => getTasksList())
    .then(tasks => {
        localStorage.setItem('tasksList', JSON.stringify(tasks))
        addMessage.value = '';
        listElem.innerHTML = '';
        renderTasks(JSON.parse(localStorage.getItem('tasksList')) || []);
    })

    //localStorage.setItem('tasksList', JSON.stringify(tasks));    
    // addMessage.value = '';
    // listElem.innerHTML = '';
    // renderTasks(JSON.parse(localStorage.getItem('tasksList')) || []);

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
            console.log(tasks[Number(ind)].done);

        } else {
            ind = checkbox.dataset.id;
            tasks[Number(ind)].done = false;

        }

        localStorage.setItem('tasksList', JSON.stringify(tasks));

        listElem.innerHTML = '';
        renderTasks(JSON.parse(localStorage.getItem('tasksList')) || []);

    });
});

