const myArray = [1, 5, 6, 7];

function sum(array) {
  if(array.length === 0) {
    return 0;
  } else {
    return array[0] + sum(array.slice(1));
  }
}

// ES6 Spread Syntax
function sum([first, ...rest]) {
  if(first === undefined) {
    return 0;
  } else {
    return first + sum(rest);
  }
}

console.log(sum(myArray));
