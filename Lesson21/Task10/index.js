function finishForm()  {
    let elem = document.querySelector('input');
    elem.type = "password";
    let input = document.createElement('input')
    input.type = "text";
    input.name = "login";
    elem.before(input);
}

finishForm();