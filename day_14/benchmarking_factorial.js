function factorialRecursive(num) {
  if(num === 1) {
    return 1;
  } else {
    return num * factorialRecursive(num - 1);
  }
}

function factorialLoop(num) {
  let result = 1;
  for(let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

console.time('Testing factorial with recursion');
for(let i = 0; i < 10000000; i++) {
  factorialRecursive(1000);
}
console.timeEnd('Testing factorial with recursion');

console.time('Testing factorial with a loop');
for(let i = 0; i < 10000000; i++) {
  factorialLoop(1000);
}
console.timeEnd('Testing factorial with a loop');
