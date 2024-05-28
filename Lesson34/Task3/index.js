//const baseUrl = 'https://6651f41920f4f4c44279464d.mockapi.io/api/v1/users';

const loginUser = () => {
    const emailUser = document.querySelector('input[type="email"]');
    const nameUser = document.querySelector('input[type="text"]');
    const passwordUser = document.querySelector('input[type="password"]');
    
    
    const email = emailUser.value;
    const name = nameUser.value;
    const password = passwordUser.value;
    
    const user = {
        email,
        name,
        password,
    }
    console.log(user);

    alert('ytllo');
}

const submitBtn = document.querySelector('.submit-button');
const inputs = document.querySelectorAll('.form-input');


for (let input of inputs) {
    input.addEventListener('blur', () => {
        if(input.reportValidity()) {
        console.log("OK!!!");
        submitBtn.removeAttribute('disabled');
        //submitBtn.setAttribute('disabled', false);
        } else {
            console.log("BED!!!");
        }
    });
    //buttonElem.setAttribute('disable', boolean);
}

// function validate(){
//     if(!registerForm.username.checkValidity()){

//         console.log("Username is not valid");
//     }
//     if(!registerForm.age.checkValidity()){
//         console.log("Age is not valid");
//     }
//     if(!registerForm.checkValidity()){
//         console.log("Form data is not valid");
//     }
// }


// function User(emailUser, nameUser, passwordUser) {
//     this.emailUser = emailUser;
//     this.nameUser = nameUser;
//     this.passwordUser = passwordUser;
// }


//const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', loginUser);
