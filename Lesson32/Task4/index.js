const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below

//export const resultPromise = null;
// const resultPromise = null;



// })
//  const arr = [];
//  const a = [];
// const resultPromise = (...asyncNumbers) => {
//   const p = new Promise((resolve) => {
//         setTimeout(() => {
//             Promise.all(asyncNumbers)            
//             //.then(numbers => arr.push(numbers));
//             .then(numbers => {a = [...numbers]});
//                 console.log(a);                
//             resolve(a);
//         }, 2000);
//         //return a;
//     });
//     return a;
// };
 
 const resultPromise = new Promise((resolve) => {             
                const p = Promise.all(promiseNumber1, promiseNumber2, promiseNumber3);
                console.log(p);
                 resolve(p);                     
         });

resultPromise
    .then(numbersList => {
        console.log(numbersList);
        const sum = numbersList.reduce((acc, num) => acc + num, 0);
        return sum;
    })
    .then(result => {
        console.log(result); // 98
    });

//asyncSum(promiseNumber1, promiseNumber2, promiseNumber3);

//resultPromise(promiseNumber1, promiseNumber2, promiseNumber3);