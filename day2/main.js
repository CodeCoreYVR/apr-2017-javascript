// alert('hey');
console.log('Hello CodeCore Students');

// this is a comment

/*
  this is a multiline
  comment
*/

console.log(`
  this is a
  multi-line sting
  written with ES6 backticks
  ${1 + 1}
  `);

// document.write('Hello World!');

// let age = parseInt(prompt("How old are you?"));
//
// if(age > 60) {
//   document.write('You are wise');
// } else {
//   document.write('You are young');
// }

// let password = prompt('What is your password?');
//
// if(password.length > 12) {
//   alert('too long');
// } else if(password.length < 8) {
//   alert('too short');
// } else {
//   alert('just right!');
// }

// const password = '714';
// const passCode = "opensesame";
// const guess = prompt('Enter the password');
//
// if(guess === passCode) {
//   alert(password);
// } else {
//   alert('Wrong password');
// }

// let x = 100;
//
// while(x >= 1) {
//   console.log(x);
//   // x = x - 1;
//   x--; // or --x
// }

// let x = 0;
//
// while(x <= 100) {
//   if(x % 2 === 0) {
//     console.log(x);
//   }
//   x++;
// }
//
// while(x <= 100) {
//   console.log(x);
//   x += 2;
// }


// let bottles = 100;
//
// while(bottles >= 1) {
//   console.log(`${bottles} bottles of beer on the wall.
//                 ${bottles} bottles of beer.
//                 Take one down, pass it around, ${--bottles} bottles of beer on the wall`);
// }
//

// for(let i = 0; i <= 100; i++) {
//   if(i === 33) {
//     break;
//   }
//   console.log(i);
// }

for(let bottles = 100; bottles > 0; bottles--) {
    console.log(`${bottles} bottles of beer on the wall.
                  ${bottles} bottles of beer.
                  Take one down, pass it around, ${bottles - 1} bottles of beer on the wall`);
}
