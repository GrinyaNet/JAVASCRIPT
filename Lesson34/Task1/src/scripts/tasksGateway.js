const baseUrl = 'https://6651f41920f4f4c44279464d.mockapi.io/api/v1/tasks';

const mapTasks = tasks =>
tasks.map(({ _id, ...rest}) => ({ ...rest, id: _id}));

export const getTasksList = () => {
    return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks))
};

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
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(updatedTaskData)
    })
}

    export const deleteTask = (taskId) => {
        return fetch(`${baseUrl}/${taskId}`, {
            method: 'DELETE',
            
        })

    //.then(response => response.json())
};