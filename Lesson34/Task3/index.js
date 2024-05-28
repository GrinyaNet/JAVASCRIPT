const baseUrl = 'https://6651f41920f4f4c44279464d.mockapi.io/api/v1/users';


const submitBtn = document.querySelector('.submit-button');
const inputs = document.querySelectorAll('.form-input');


for (let input of inputs) {
    input.addEventListener('blur', () => {
                   if (input.reportValidity()) {
            console.log("OK!!!"); 
            submitBtn.removeAttribute('disabled');
        } else {
            
            return buttonElem.setAttribute('disabled');
        }
       
    });
    
}

const loginUser = (event) => {
    event.preventDefault();
    const myFormData = new FormData(form);
    
    const formDataObj = Object.fromEntries(myFormData);
    console.log(formDataObj);

    fetch(baseUrl, {
        method: 'POST',
         headers: {
             'Content-Type': 'application/json;charset=utf-8'
         },       
        body: JSON.stringify(formDataObj)
    })
        .then(response => response.json())        
        .then((data) => alert(JSON.stringify(data)))
    form.reset();
}


const form = document.querySelector('.login-form');

submitBtn.addEventListener('click', loginUser);

