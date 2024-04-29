let students = [
    { name: 'Tom', birthDate: '01/15/2010'},
    { name: 'Sam', birthDate: '03/14/2008'}, 
    { name: 'Ben', birthDate: '01/17/2008'},    
]

const formatter = new Intl.DateTimeFormat('en', {
    timeZone: 'UTC',
    month: 'short'   
});

let birth = {};
let arr = [];

const studentsBirthDays = (students) => {
let newStudents = students.slice();
newStudents.sort((first, second) => new Date(first.birthDate.slice(0, 5)) - new Date(second.birthDate.slice(0, 5)));

// let newStudents1 = newStudents.sort(function(a, b){    
    
//      //if ((new Date(a.birthDate).getDay()) < (new Date(b.birthDate).getDay())) {
//      if ((new Date(a.birthDate).getMonth() + new Date(a.birthDate).getDate()) - (new Date(b.birthDate).getMonth() + new Date(b.birthDate).getDate())) {
//      //if (Date.parse(a.birthDate) < Date.parse(b.birthDate)) {
//         return 1;
//      }    
// });
 newStudents.forEach(element => {

     console.log(formatter.format(new Date(element.birthDate)));
     let d = formatter.format(new Date(element.birthDate));
     let c = formatter.format(new Date(element.birthDate));
//     //birth[formatter.format(new Date(element.birthDate).getMonth())] = [];
if (c = d) {
    
}
arr.push(element.name);
     birth[d] = arr;
      //birth.d = element.name;

 });
return newStudents, birth;
}


console.log(studentsBirthDays(students));
//console.log( Date.parse());
//console.log( Date.parse());
//students.sort((first, second) => new Date(first.birthDate) - new Date(second.birthDate))

//не учитывая год
//students.sort((first, second) => new Date(first.birthDate.slice(0, 5)) - new Date(second.birthDate.slice(0, 5)))
