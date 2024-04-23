const input = document.querySelectorAll('.btn');
input.forEach(button => {
    button.addEventListener('click', handleClick);    
})

function handleClick(event) {
    console.log(event.target.textContent);
    
};

