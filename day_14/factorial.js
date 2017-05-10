function factorial(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(100));
