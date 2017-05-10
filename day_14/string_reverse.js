function reverseString(string) {
  if(string.length === 0) {
    return '';
  } else {
    return string[string.length - 1] + reverseString(string.slice(0, -1));
  }
}

function reverseString(string) {
  if(string.length === 0) {
    return '';
  } else {
    return reverseString(string.slice(1)) + string[0];
  }
}

console.log(reverseString('hello'));
console.log(reverseString(''));
console.log(reverseString('hi'));
console.log(reverseString('hello work'));
console.log(reverseString('What\'s up'));
