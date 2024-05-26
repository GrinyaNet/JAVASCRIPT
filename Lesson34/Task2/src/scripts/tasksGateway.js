const baseUrl = 'https://crudcrud.com/api/7a408b94c2e943e99d4de4522a839847/tasks';

export const getTasksList = () => {
    return fetch(baseUrl)
    .then(response => response.json())
}

export const createTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
}

export const updateTask = (taskId, updatedTaskData) => {
    return fetch(`baseUrl/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
    //.then(response => response.json())
};