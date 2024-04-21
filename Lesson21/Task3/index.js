function getItemsList()  {
    let elem = document.querySelectorAll('.technology');
    console.dir(elem);
    return elem;
}

function getItemsArray()  {
    let elem = document.querySelectorAll('.tool');
    const arr = Array.from(elem);
    console.dir(arr);
    return arr;
}

