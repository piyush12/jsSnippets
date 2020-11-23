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
