let students = [
    { name: 'Tom', birthDate: '01/15/2010'},
    { name: 'Sam', birthDate: '03/17/2008'}, 
    { name: 'Ben', birthDate: '01/17/2008'},    
]

const studentsBirthDays = (students) => {
let newStudents = students.slice();
let newStudents1 = newStudents.sort(function(a, b){
     if (Date.parse(a.birthDate) < Date.parse(b.birthDate)) {
        return -1;
     }
     
    
})
return newStudents1;
}


console.log(studentsBirthDays(students));
//console.log( Date.parse());
//console.log( Date.parse());