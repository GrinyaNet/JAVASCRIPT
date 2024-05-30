import { fetchUserData, fetchRepositories } from './gateways.js';
import { renderUserData } from './user.js';
import { renderRepos, cleanReposList } from './repos.js';
import { showSpinner, hideSpinner } from './spinner.js';

//const userAvatarElem = document.querySelector('.user__avatar');
// const userNameElem = document.querySelector('.user__name');
// const userLocationElem = document.querySelector('.user__location');

//const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

//userAvatarElem.src = defaultAvatar;

// const fetchUserData = userName => {
//     return fetch(`https://api.github.com/users/${userName}`)        
//         .then(response => response.json());
// }

// const renderUserData = (userData) => {
//     const { avatar_url, name, location } = userData;    
//     userAvatarElem.src = avatar_url;
//     userNameElem.textContent = name;
//     userLocationElem.textContent = location
//         ? `from ${location}`
//         : '';
// }

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    cleanReposList();
    const userName = userNameInputElem.value;
    fetchUserData(userName)        
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then(url => fetchRepositories(url))
        .then(reposList => {
            renderRepos(reposList);            
        })
        .catch(err => {            
            alert(err.message)
        })
        .finally(() => {
            hideSpinner();
        })
};

showUserBtnElem.addEventListener('click', onSearchUser);