// Fibonacci
function fibonacci(num) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= num; i++) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  return nextTerm;
}

// Recursive Fibonnaci
function recursiveFibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

// Factorial
function factorial(num) {
  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp *= i;
  }
  return temp;
}

// Recursive Factorial
function recursiveFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}

// Memoized Factorial
const memoizedFactorial = memo(recursiveFactorial);
const memoizedFactorial8 = memoizedFactorial(8);

// Memoization Function
function memo(fun) {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    return (cache[key] = fun.apply(null, args));
  };
}

function sum(a, b) {
  return a + b;
}

const fn = memoized(sum);
fn(2, 4);
fn(2, 4);

function memoized(callback) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }
    const result = callback(args);
    cache[key] = result;
    return result;
  };
}

// get form inputs data for uncontrolled form inputs react :)

function captureFormInputs(event) {
  const elemArray = [...event.target.elements];
  const data = elemArray.reduce((acc, elem) => {
    if (elem.name && elem.id) {
      acc[elem.name] = elem.value;
    }
    return acc;
  }, {});

  return data;
}

// ============== or ========

function captureFormInputsNew(event) {
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  return data;
}

/// once function

function once() {
  var clicked = false;

  return function () {
    if (!clicked) {
      clicked = true;
      // do anything
    }
    return clicked;
  };
}

//// debounce function

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    let context = this;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}

//// throttle

function throttle(fn, delay) {
  let timer;

  return function () {
    let context = this;
    if (!timer) {
      fn.apply(context, arguments);
      timer = true;
      setTimeout(() => {
        timer = false;
      }, delay);
    }
  };
}

////////// misc
// remove elements from end of array and print the removed array
let array = [1, 2, 3, 4, 5];
function removeArrayFromEnd(array, num) {
  const reverseArray = array.reverse();
  const removedArray = reverseArray.slice(0, num).reverse();
  const newArray = reverseArray.reverse();
  return removedArray;
}

//  sum of a(1)(2)(3)(4)
const add = (a) => (b) => (b ? add(a + b) : a);
//console.log(add(1)(2)(3)(4)());

//// implement bind

const person = {
  name: "piyush",
};

function setName(lastName, state, profile) {
  return `my name is ${this.name} ${lastName}, ${state}, ${profile}`;
}

Function.prototype.customBind = function (...context) {
  if (typeof this !== "function") {
    throw new Error("Not a function");
  }
  let fn = this;
  return function () {
    return fn.apply(context[0], [...context.slice(1), ...arguments]);
  };
};
const myName = setName.customBind(person, "chatterjee", "live in kanpur");
//console.log(myName("Developer"));

/// curried

function curry(fn) {
  return function currify(...args) {
    if (args.length >= fn.length) {
      console.log(args);
      return fn.apply(this, args);
    } else {
      return currify.bind(this, ...args);
    }
  };
}

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
