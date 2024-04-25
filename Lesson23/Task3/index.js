const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

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
    console.dir(tasks);
    addMessage.value = '';
    listElem.innerHTML = '';
    renderTasks(tasks);
})


const check = document.querySelectorAll('.list__item-checkbox').forEach(item => {
    
    let check1 = Array.from(document.querySelectorAll('.list__item-checkbox'));
    check1.forEach((checkbox, index) => {
        checkbox.dataset.id = index;
    })

    
    item.addEventListener('click', function () {
        check1.forEach((checkbox, index) => {

            if (checkbox.checked) {
                let ind = checkbox.dataset.id;
                console.log(ind);
                tasks[Number(ind)].done = true;
            } else {
                let ind = checkbox.dataset.id;
                console.log(ind);
                tasks[Number(ind)].done = false;
            }
            
        })
        listElem.innerHTML = '';
        renderTasks(tasks);
        
    });
    
    
});

console.log('Hello!!!');
