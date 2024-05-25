const baseUrl = 'https';

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