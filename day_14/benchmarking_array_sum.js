const myArray = [1,4,3,5,6,7,7,4,88,4,8,8];

function sumRecursive(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sumRecursive(array.slice(1));
  }
}

function sumLoop(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return(sum);
}

console.time('Testing array sum with recursion');
for(let i = 0; i < 10000000; i++) {
  sumRecursive(myArray);
}
console.timeEnd('Testing array sum with recursion');

console.time('Testing array sum with a loop');
for(let i = 0; i < 10000000; i++) {
  sumLoop(myArray);
}
console.timeEnd('Testing array sum with a loop');
