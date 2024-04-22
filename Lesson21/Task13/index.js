function getSection(num) {
    let number = num.toString();
    let elem = document.querySelector(`span[data-number = "${number}"]`);
    return elem.parentElement.dataset.section;
    //let data = elem.parentElement;
    //let a = data.dataset.section;
    //return console.dir(a);
}

getSection(3);