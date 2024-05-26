import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, updateTask } from './tasksGateway.js';

export const onToggleTask = e => {
    //const isCheckbox = e.target.classList.contains('list-item__checkbox');
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }

    const taskId = e.target.dataset.id;
    const tasksList = getItem('tasksList');
    const { text, createDate } = tasksList
        .find(task => task.id === taskId);
    const done = e.target.checked;

    const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done
            ? new Date().toISOString()
            : null
    };
    updatedTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });

    // const newTasksList = tasksList
    //     .map(task => {
    //         if (task.id === e.target.dataset.id) {
    //             const done = e.target.checked;
    //             return {
    //                 ...task,
    //                 done,
    //                 finishDate: done
    //                     ? new Date().toISOString()
    //                     : null
    //             };
    //         }

    //         return task;
    //     });
    // setItem('tasksList', newTasksList);

    // renderTasks();
};