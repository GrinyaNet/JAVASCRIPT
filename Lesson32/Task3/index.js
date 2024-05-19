/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (num) => {
    // put you code here
    //const num ='';
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num);
        }, 2000);
    })
  };
  
  /*
   * пример использования
   */
  makePromise(17).then(number => {
    console.log(number); // 17
  });
  