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

function addPropertyV1(userData, userId) {
    // put your code here
    userData.id = userId;
    return userData;
  }
  
  // put your code here
  function addPropertyV2(userData, userId) {  
    const newObj = {};
    newObj.id = userId;
    userData = Object.assign(userData, newObj);
    return userData;
  }
  // put your code here
  function addPropertyV3(userData, userId) {    
    const newObj = {};
    const clonObj = {};
    newObj.id = userId;
    Object.assign(clonObj, userData, newObj);
    return {userData, clonObj};
  }
  // put your code here
  function addPropertyV4(userData, userId) {
    const newObj = {};
    newObj.id = userId;
    const newObjw = {...userData, ...newObj};
    return newObjw;
  }
  
  // examples
  const user = {
    name: 'Sam',
  };
  console.log(addPropertyV3(user, '1234567')); // ==> { name: 'Sam', id: '1234567' }
  