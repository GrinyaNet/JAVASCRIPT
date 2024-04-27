//console.log(new Date(), new Date());

const getDiff = (startDate, endDate) => {
    const result = Math.abs(new Date(startDate) - new Date(endDate));
    //const result = Math.abs(startDate.getTime() - endDate.getTime());
    const day = Math.floor(result / 86400000);
    let buffer = Math.floor(result % 86400000);
    const hour = Math.floor(buffer / 36000000);
    buffer = Math.floor(buffer % 36000000);
    const min = Math.floor(buffer / 60000);
    buffer = Math.floor(buffer % 60000);
    const sec = Math.floor(buffer / 1000);
    return (`${day}d ${hour}h ${min}m ${sec}s`);
    
    
    //console.log(result);
};

//console.log(getDiff(new Date(), new Date()));
console.log(getDiff(new Date('2021-08-18'), new Date('2024-08-18')));
// let msDiff = newYearDate - today,
//     days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
//     hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
//     mins = Math.floor((msDiff / 1000 / 60) % 60),
//     secs = Math.floor((msDiff / 1000) % 60);

// document.write('<p>' + days + ' : ' + hours + ' : ' + mins + ' : ' + secs + '</p>');