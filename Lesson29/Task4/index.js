const pinger = (count, period) => {
    // put your code here
    let i = count;
    console.log('Ping');
    const interval = setInterval(() => {
      if (--i > 0) {
          console.log('Ping');
      } else {
          clearInterval(interval);
      }
    }, period);
  };
  