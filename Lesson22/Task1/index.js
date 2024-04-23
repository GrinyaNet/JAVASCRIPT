const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');



const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');

    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

divElem.addEventListener('click', logGreenDiv);
divElem.addEventListener('click', logGreyDiv, true);

pElem.addEventListener('click', logGreenP);
pElem.addEventListener('click', logGreyP, true);

spanElem.addEventListener('click', logGreenSpan);
spanElem.addEventListener('click', logGreySpan, true);


const buttonClear = document.querySelector('.clear-btn');
buttonClear.addEventListener('click', function () {

    const input = document.querySelector('.events-list');
    input.innerHTML = '';
})

const removeHandlers = document.querySelector('.remove-handlers-btn');
removeHandlers.addEventListener('click', function () {
    divElem.removeEventListener('click', logGreenDiv);
    divElem.removeEventListener('click', logGreyDiv, true);

    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGreyP, true);

    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGreySpan, true);
})

const attachHandlers = document.querySelector('.attach-handlers-btn');
attachHandlers.addEventListener('click', function () {
    divElem.addEventListener('click', logGreenDiv);
    divElem.addEventListener('click', logGreyDiv, true);

    pElem.addEventListener('click', logGreenP);
    pElem.addEventListener('click', logGreyP, true);

    spanElem.addEventListener('click', logGreenSpan);
    spanElem.addEventListener('click', logGreySpan, true);

})

