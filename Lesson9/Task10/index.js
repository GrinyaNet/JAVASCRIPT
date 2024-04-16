'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  // put your code here  
  let arr = [];
  let arrSec = [];
  //1. Преобразовать объект в массив.
  let enteries = Object.entries(firstObj);
  let enteriesSec = Object.entries(secondObj);
  enteries.map(([index, item]) => (arr.push(index, item)));
  enteriesSec.map(([index, item]) => (arrSec.push(index, item)));
  //2. Отсортировать массив.
  let arrSort = arr.sort();
  let arrSortSec = arrSec.sort();
  //3. Преобразовать массив в строку.
  let str = arrSort.join(' ');
  let strSec = arrSortSec.join(' ');
  //4  Сравниваем строки.
let result = (str === strSec);

return result;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
