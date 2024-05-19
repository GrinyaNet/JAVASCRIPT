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

// const asyncSum = (...asyncNumbers) => {
//   const resultPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             Promise.all(asyncNumbers)            
//             .then(numbers => arr.push(numbers));
//                 console.log(arr);                
//             resolve(arr);
//         }, 2000);
        
//     });
//     return resultPromise;
// };
const arr = [];
arr.push(promiseNumber1, promiseNumber2, promiseNumber3);

 resultPromise = new Promise((resolve) => {
             setTimeout(() => {
                const p = Promise.all(arr)                               
                 resolve(p);
            }, 2000);            
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