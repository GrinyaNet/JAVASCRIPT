import {tasks, getArr} from './storage.js';
import {todoList} from './todoList.js';

export const listElem = document.querySelector('.list');

export const renderTasks = tasksList => {

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
     
     //localStorage.getItem('person', JSON.parse(tasks));
};

//localStorage.getItem('person', JSON.parse(tasks));