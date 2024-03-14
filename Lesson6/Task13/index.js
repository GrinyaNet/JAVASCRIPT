function withdraw(clients, balances, client, amount) {
    
    let result = 0;
    let index = 0;
    index = clients.indexOf(client);

    if (amount <= balances[index]) {

        result = balances[index] - amount;
        balances[index] = result;
        return result;
        
    } else {
result = -1;
        //return result;
    }   
    return result;
}



console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));

//   Пример работы:
//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)
//   Output: 37 (и массив balances должен быть [1400, 37, -6])

//   Input: withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)
//   Output: -1 (и массив balances должен быть [1400, 87, -6])
