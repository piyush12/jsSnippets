//The singleton pattern is a type of creational pattern that restricts the instantiation of a class to a single object.

let instance = null;
class Printer {
  constructor(pages) {
    this.display = function () {
      console.log(
        `You are connected to the printer. You want to print ${pages} pages.`
      );
    };
  }

  static getInstance(numOfpages) {
    if (!instance) {
      instance = new Printer(numOfpages);
    }
    return instance;
  }
}

var obj1 = Printer.getInstance(2);
//console.log(obj1);
//obj1.display();
var obj2 = Printer.getInstance(3);
//console.log(obj2);
//obj2.display();
///console.log(obj2 == obj1);

/// constructor and prototype Pattern

///////// Prototype and prototypal inheritance

function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function (food) {
  return `${this.name} eat ${food}`;
};
Animal.prototype.sleep = function (amount) {
  console.log(`${this.name} sleep ${amount}hrs`);
};

function Programmer(name, lang) {
  Animal.call(this, name);
  this.language = lang;
}
Programmer.prototype = Object.create(Animal.prototype);
Programmer.prototype.constructor = Programmer;
const piyush = new Programmer("piyush", "Javascript");

function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

///////// eg 2
/*
function Human(name, age) {
  this.name = name;
  this.age = age;
}

Human.prototype.health = function (heart) {
  this.heart = heart;
};

function Man(name, age) {
  Human.call(this, name, age);
}

Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;
*/
/// conver to class

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  health(heart) {
    this.heart = heart;
  }
}

class Man extends Human {
  constructor(name, age) {
    super(name, age);
  }
}

function check() {
  var obj = new Man("Tommy Tan", 20);
  //console.log(obj);
  //console.log(obj instanceof Human);
  //console.log(obj);
  //console.log(obj.health(20));
}
check();

/////////////// ===============
