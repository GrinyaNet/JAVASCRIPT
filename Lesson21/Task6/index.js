function setButton(text)  {
    let elem = document.querySelector('body');
    elem.innerHTML = '<button>' + text + '</button>';
}

setButton('Hello!!!');