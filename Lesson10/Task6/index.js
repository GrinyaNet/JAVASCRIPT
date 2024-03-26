/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
    // put your code here
    const bufer  = [...Array(length)];    
    if ((from > to) || ((Math.floor(to)) - (Math.floor(from))) < 1) {
        return null;
    }
    from = Math.ceil(from);
    to = Math.floor(to);
    const result = bufer.map((key) => {
    key = (Math.floor((Math.random() * (to - from + 1) + from)));
    return key;
    });
return result;
  };

// for (let i = 0; i < result.length; i++) {
    //     result[i] = Math.trunc((Math.random() * (to - from) + from));
    // }

  // examples
  console.log(getRandomNumbers(50, 90.5, 95));
  console.log(getRandomNumbers(7, 1.5, 1.9));
   console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
   console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
   console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
   console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
   console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]
  
   console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
   console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
  console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
  