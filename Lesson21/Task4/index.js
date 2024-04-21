export function getTitle()  {
    let elem = document.querySelector('.title');
    console.dir(elem.textContent);
    return elem.textContent;
}

export function getDescription()  {
    let elem = document.querySelector('.about');
    console.dir(elem.innerText);
    return elem.textContent;
}

export function getPlans()  {
    let elem = document.querySelector('.plans');
    console.dir(elem.innerHTML);
    return elem.textContent;
}

export function getGoal()  {
    let elem = document.querySelector('.goal');
    console.dir(elem.outerHTML);
    return elem.textContent;
}

getTitle();
getDescription();
getPlans();
getGoal();