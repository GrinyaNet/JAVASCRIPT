const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (max > arr[i]) {
    } else {
      max = arr[i];
    }
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (min < arr[i]) {
    } else {
      min = arr[i];
    }
  }

  return min + max > 1000;
};

console.log(checker([10, 12, 10])); // ===> false
//console.log(checker([10, 99, 1])); // ===> true
console.log(checker([-6, -3, 200])); // ===> true
