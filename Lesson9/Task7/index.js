const getTotalRevenue = transactions => {
    // put your code here
    let arr = 0;
    //let result = Object.values(obj);
    const newArr = transactions.map(element => {return arr +=(element.amount)});    
    return arr;
  };
  
  // examples
  const dayTransactions = [
    { userId: 22, amount: 60, operation: 'sell' },
    { userId: 22, amount: 160, operation: 'buy' },
    { userId: 44, amount: 90, operation: 'sell' },
  ];
  
  const result = getTotalRevenue(dayTransactions); // ==> 310
  console.log(result);