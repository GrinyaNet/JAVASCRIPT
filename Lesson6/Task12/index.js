function sortAsc (array) {

    if (!Array.isArray(array)) {
        return null;
      }
      
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let a = array[j];
            let b = array[j + 1];
            if (a > b) {
                let temp = a;
                a = b;
                b = temp;
            } 
            array[j] = a;
            array[j + 1] = b;
            }
            
        }
        
          return array;
}

function sortDesc (array) {

  if (!Array.isArray(array)) {
      return null;
    }
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
          let a = array[j];
          let b = array[j + 1];
          if (a < b) {
              let temp = a;
              a = b;
              b = temp;
          } 
          array[j] = a;
          array[j + 1] = b;
          }
          
      }
      
        return array;
}

console.log(sortDesc([2, 5, 6, 8, 11, 9, 4, 20]));
console.log(sortDesc([7, 11, 1, 10]));
console.log(sortDesc([2, 8, 6, 8, 11, 9, 18, 20]));