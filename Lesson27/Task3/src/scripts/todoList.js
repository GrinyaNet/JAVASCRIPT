import {listElem, renderTasks} from './updateTask.js';
import {tasks} from './storage.js';

export const todoList = (tasks) => {
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
                //e.target.dataset.id
            } else {
                ind = checkbox.dataset.id;
                tasks[Number(ind)].done = false;
            }

            localStorage.setItem('person', JSON.stringify(tasks));
         listElem.innerHTML = '';
         renderTasks(tasks); 

});
});
};
