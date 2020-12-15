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

function currying(func) {
  return function curryFunc(...args) {
    if (args.length === func.length) {
      return func(...args);
    } else {
      return curryFunc.bind(this, ...args);
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}
let curried = currying(multiply);
//console.log(curried(2)(3)(4)); //24
//console.log(curried(5)(6, 7)); //24

function giveMeFunctions() {
  var functions = [];
  for (var i = 0; i < 3; i++) {
    functions[i] = (function (arg) {
      return function () {
        return arg * arg;
      };
    })(i);
  }
  return functions;
}

/// Greatest common divisor

var gcd = function (a, b) {
  console.log(a);
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

/// parenthesis checker
balancedParentheses("{[]()}");
balancedParentheses("{[(])}");
function balancedParentheses(str) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < str.length; i++) {
    // If character is an opening brace add it to a stack
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    }
    //if closing brace, pop from stack
    else {
      let lastEle = stack.pop();
      //Return false if the element popped doesn’t match the corresponding closing brace in the map

      if (str[i] !== map[lastEle]) {
        return false;
      }
    }
  }
  //if stack not empty at end, return false
  if (stack.length !== 0) {
    return false;
  }

  return true;
}

//// flattern array

function flattenArray(arr, result) {
  // using es6 flat method
  // return arr.flat(Infinity);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
//console.log(flattenArray([1, [2], [3, [[4]]]], []));

//// shuffle array
var my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
my_list.sort(function () {
  return Math.random() - 0.5;
});
// [4, 8, 2, 9, 1, 3, 6, 5, 7]
