const input = document.querySelector('.single-use-btn');

input.addEventListener('click', func);

function func() {
    console.log('clicked');
    input.removeEventListener('click', func);
};