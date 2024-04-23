const input = document.querySelector('.text-input');

input.addEventListener('change', func);

function func(event) {
    console.log(event.target.value);    
};