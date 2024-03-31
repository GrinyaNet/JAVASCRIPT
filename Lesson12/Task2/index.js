const reverseString = str => {
    
    if (typeof str !== 'string') {
        return null;
    }
    
      let  result = str.split('').reverse().join('');
    
    return result;
};

console.log(reverseString('12345678910abc'));
console.log(reverseString([]));