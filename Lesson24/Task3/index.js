//console.log(new Date(), new Date());

const getDiff = (startDate, endDate) => {
    const result = Math.abs(new Date(startDate) - new Date(endDate));
    //const result = Math.abs(startDate.getTime() - endDate.getTime());
    const day = Math.trunc(result / 86400000);
    let buffer = Math.trunc(result % 86400000);    
    const hour = Math.trunc(buffer / 3600000);    
     buffer = Math.trunc(buffer % 3600000);
     const min = Math.trunc(buffer / 60000);
     buffer = Math.trunc(buffer % 60000);
     const sec = Math.trunc(buffer / 1000);
     return (`${day}d ${hour}h ${min}m ${sec}s`);
    
    
    //console.log(result);
};

//console.log(getDiff(new Date(), new Date()));
console.log(getDiff(new Date('2024-04-27'), new Date()));
// let msDiff = newYearDate - today,
//     days = Math.floor(msDiff / (24 * 60 * 60 * 1000)),
//     hours = Math.floor((msDiff / (1000 * 60 * 60)) % 24),
//     mins = Math.floor((msDiff / 1000 / 60) % 60),
//     secs = Math.floor((msDiff / 1000) % 60);

// document.write('<p>' + days + ' : ' + hours + ' : ' + mins + ' : ' + secs + '</p>');