/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = () => {
    // put you code here
    //const num ='';
    console.log();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    })
  };
  
  /*
   * пример использования
   */
  makePromise(17).then(number => {
    console.log(number); // 17
  });
  