/**
 * @param {object} obj
 * @return {undefined}
 */
function getKeys(obj) {
    // put you code here
    const nameKey = Object.keys(obj);
    nameKey.forEach(element => console.log(element));
    //return nameKey;
  }
  
  // examples
  console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
  // prints ===>
  // name
  // city
  // englishLevel
  