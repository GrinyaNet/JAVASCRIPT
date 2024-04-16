const obj4 = {
    name: 'Tom',
    age: 17,
  }
  const obj5 = {
    age: 17,
    name: 'Tom',
  }
  const obj44 = {
    name: 'Tom',
    aage: 17,
  }
  const obj55 = {
    age: 17,
    name: 'Tom',
  }
  
  const orderedObj = (obj) => Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
  
  const compareObjects = (obj1, obj2) =>  JSON.stringify(orderedObj(obj1)) === JSON.stringify(orderedObj(obj2))
  
  console.log(compareObjects(obj4, obj5))  // true
  console.log(compareObjects(obj4, obj4)) // true
  console.log(compareObjects(obj55, obj5))  // true