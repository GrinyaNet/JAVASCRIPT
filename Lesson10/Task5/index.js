const getTotalPrice = arr => {
    let i = 0;
arr.forEach(element => {
    i += element;    
});
Math.floor(i * 100);
return (('$' + Math.floor(i * 100)/100));
}

console.log(getTotalPrice([-10, 10, -10])); // ===> 10
console.log(getTotalPrice([2.1, 0, 1.6])); // ===> 2.1
