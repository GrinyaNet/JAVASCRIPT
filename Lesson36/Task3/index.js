'use strict';

/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = async users => {
  
  try {
    const arrayFetchUsers = users.map(user => fetch(`https://api.github.com/users/${user}`).then((response) => response.json()))
    const promise = Promise.all(arrayFetchUsers);


if (promise.ok) {
           return null;
         }

    const resalt = await promise;    
    const resultArr = resalt.map((item) => (item.blog));    
    return resultArr;
  } catch (err) {
      throw new Error('Failed to get user data');
     } 
};


// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then(linksList => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
