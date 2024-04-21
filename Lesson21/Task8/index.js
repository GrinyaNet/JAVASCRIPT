function createButton(buttonText)  {
    let elem = document.querySelector('body');
    let dom = document.createElement('button');
    dom.textContent = buttonText;
    elem.append(dom);
}

createButton('Send Email');