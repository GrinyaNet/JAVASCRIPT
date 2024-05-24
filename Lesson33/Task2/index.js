const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  // put your code here
  return fetch(baseUrl)        
        .then(response => response.json());
}

function getTaskById(taskId) {
  // put your code here
  return fetch(`${baseUrl}?id=${taskId}`)
  .then(response => response.json())  
}

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});

// let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
// let searchTerm = 'г. Москва';
// let cityId = cities.find(city => city.name === searchTerm).id
// console.log(cityId);

// let response = fetch(protectedUrl, {
//     headers: {
//       Authentication: 'secret'
//     }
//   });