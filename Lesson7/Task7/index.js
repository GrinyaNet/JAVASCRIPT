const withdraw = (clients, balances, client, amount) => {    
    // put your code here    
    
    let index = clients.indexOf(client);

    if (amount <= balances[index]) {

        balances[index] = balances[index] - amount;        
        return balances[index];
        
    }   
    return -1;
  };
  
  // examples
  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
  console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])
  