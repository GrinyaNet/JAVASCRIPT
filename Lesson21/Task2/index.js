export function getTitleElement()  {
    let elem = document.querySelector('.title');
    console.dir(elem);
    return elem;
}

export function getInputElement()  {
    let elem = document.querySelector('input', type="text");
    console.dir(elem);
    return elem;
}

getTitleElement();
getInputElement();