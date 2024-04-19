// пример работы getters / setters у классов и объектов

class Dog {
    constructor(name) {
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  }
  
  const myDog = new Dog('Rex');
  console.log(myDog.name); // ===> 'Rex'
  myDog.name = 'Buddy'; // ===> если бы не было setter, то имя бы не поменялось
  console.log(myDog.name); // ===> 'Buddy'
  