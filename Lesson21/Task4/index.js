export function getTitle()  {
    let elem = document.querySelector('.title');    
    return elem.textContent;
}

export function getDescription()  {
    let elem = document.querySelector('.about');    
    return elem.innerText;
}

export function getPlans()  {
    let elem = document.querySelector('.plans');    
    return elem.innerHTML;
}

export function getGoal()  {
    let elem = document.querySelector('.goal');    
    return elem.outerHTML;
}

getTitle();
getDescription();
getPlans();
getGoal();