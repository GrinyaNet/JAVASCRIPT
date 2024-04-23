const input = document.querySelectorAll('.pagination__page');
input.forEach(button => {
    button.addEventListener('click', handleClick);    
})

function handleClick(event) {
    console.log(event.target.dataset.pageNumber);
    
};