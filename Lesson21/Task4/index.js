export function getTitle()  {
    let elem = document.querySelector('.title');    
    return elem.textContent;
}

export function getDescription()  {
    let elem = document.querySelector('.about');    
    return elem.textContent;
}

export function getPlans()  {
    let elem = document.querySelector('.plans');    
    return elem.textContent;
}

export function getGoal()  {
    let elem = document.querySelector('.goal');    
    return elem.textContent;
}

getTitle();
getDescription();
getPlans();
getGoal();