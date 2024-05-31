'use strict';

 const  fetchUser = async userId => {
  // put your code here
try {
  const responce = await fetch(`https://api.github.com/users/${userId}`)
  if (!responce.ok) {
    return null;
  }
  const userDate = await responce.json();
  return userDate;
} catch (err) {
  throw new Error('Failed to fetch user');
}
};

fetchUser('facebook')
.then(userDate => console.log(userDate))
.catch(err => alert(err.message));
