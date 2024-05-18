const asyncCalculator = num => new Promise((resolve) => {
    
    setTimeout(() => {
            resolve(num)
            console.log(`Initial value: ${num}`);           
        }, 500);
    })
    
  .then(value => new Promise((resolve) => {
        const result = value * value;
        //console.log(`Squered value: ${result}`);
        setTimeout(() => {
            resolve(result);
            console.log(`Squered value: ${result}`);
        }, 5000);
  }))

  .then(value => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`);
    return result;
  })

  asyncCalculator(5)
  .then(value => console.log(value));