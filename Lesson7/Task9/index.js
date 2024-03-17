const filterNames = (arr, text) => {
    let newNames = arr.filter(word =>         
             word.length > 5 && word.includes(text)        
    );

    return newNames;

}

console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
//   Output: ['Olivya', 'Nastya']