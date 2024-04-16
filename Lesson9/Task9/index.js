/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
    // put you code here
    
//     for (let index of keysList) {
//         console.log(index);
// newArr.push(index = valuesList[i]);
//         i +=1;
//     }
const newObj = {};
    let i =0;
for (let i = 0; i<keysList.length; i++) {
    newObj[keysList[i]] = valuesList[i];
    
    
}

    return newObj;
  }
  
  // examples
  const keys = ['name', 'address', 'age'];
  const values = ['Bob', 'Ukraine', 34];
  const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);