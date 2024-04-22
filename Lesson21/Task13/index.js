function getSection(num)  {
   
    let elem = document.querySelector('.number');
    let num = elem.dataset.number;       
    elem.dataset.squarednumber = Math.pow(num, 2);
    elem = document.querySelector('.number');
    num = elem.dataset.number;       
    elem.dataset.squarednumber = Math.pow(num, 2);
    `span[data-number="${num}]`
}

getSection();