const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    month: 'short'
    //hour: '2-digit',
   // minute: "2-digit",
   // hour12: false
});

const getTime = date => formatter.format(date);

console.log(getTime(new Date(60985470)));



    