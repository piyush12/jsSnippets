// Fibonacci
export function fibonacci(num) {
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
export function recursiveFibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return recursiveFibonacci(num - 1) + recursiveFibonacci(num - 2);
}

// Factorial
export function factorial(num) {
  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp *= i;
  }
  return temp;
}

// Recursive Factorial
export function recursiveFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * recursiveFactorial(num - 1);
}

// Memoization Function
export function memo(fun) {
  let cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    return (cache[key] = fun.apply(null, args));
  };
}
