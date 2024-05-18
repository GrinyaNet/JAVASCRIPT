const asyncCalculator = num => new Promise((resolve) => {
    console.log(`Initial value: ${num}`);
    setTimeout(() => {
            resolve(num)            
        }, 3000);
    })
    
  .then(value => new Promise((resolve) => {
        const result = value * value;
        console.log(`Squered value: ${result}`);
        setTimeout(() => {
            resolve(result);            
        }, 5000);
  }))

  .then(value => {
    const result = value * 2;
    console.log(`Doubled value: ${result}`);
    return result;
  })

  asyncCalculator(5)
  .then(value => console.log(value));