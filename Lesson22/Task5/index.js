const input = document.querySelector('.search__btn');
const input1 = document.querySelector('.search__input');

const inputElem = input.addEventListener('click', function() {
    console.log(input1.value);
})