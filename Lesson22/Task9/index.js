const input = document.querySelector('.task-status');

input.addEventListener('change', func);

function func(event) {
    console.log(event.target.checked);    
};