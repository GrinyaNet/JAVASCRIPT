/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {    
    obj[key] = value;
    return obj;
  }
  
  // put your code here
  function addPropertyV2(obj, key, value) {    
    const newObj = {};
    newObj[key] = value;
    const userData = Object.assign(obj, newObj);
    return userData;
    
  }
  
  // put your code here
  function addPropertyV3(obj, key, value) {    
    const newObj = {};
    const clonObj = {};
    newObj[key] = value;
    userData = Object.assign(clonObj, obj, newObj);
    return userData;
  }
  
  // put your code here
  function addPropertyV4(obj, key, value) {    
    const newObj = {};
    newObj[key] = value;
    const newObjw = {...obj, ...newObj};
    return newObjw;
  }
  
  // examples
  const transaction = {
    value: 170,
  };
  console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
  