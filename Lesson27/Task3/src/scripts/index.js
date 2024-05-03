import { createTask } from './createTask.js';
import { todoList } from './todoList.js';
import { tasks, getArr } from './storage.js';
import { renderTasks } from './updateTask.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks(getArr(tasks));
    createTask(tasks);
    todoList(tasks);
});