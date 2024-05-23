//const comint = 'api.github.com/USERID/REPOID/commits?per_page=100';
const comint = 'https://api.github.com/USERID/REPOID/commits?per_page=100';

const getMostActiveDevs = () => {
    return fetch(comint)
        .then(response => console.log(response.json()));
        //.then(response => response.json());
}

getMostActiveDevs({ days: 7, userId: 'userId', repoId: 'repoId'});