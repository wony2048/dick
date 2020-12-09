"use strict"

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
 console.log(fruits[fruits.length - 1]);

 console.clear();
// 3. Lopping over an array
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
fruits.push('🍓','🐽');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓','🐽');
console.log(fruits);
// shift: remove an item from teh benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push

fruits.push('🍋','🍑');
fruits.push('🍓');
console.log(fruits);

fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits);

// combine two arrays
const fruits2 = ['🍇', '🥝'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 5. Searching
console.clear();
console.log(fruits);

// index of
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🥤'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('🥤'));

console.clear();
console.log(fruits);
fruits.push('🍏');
console.log(fruits.indexOf('🍏'));
console.log(fruits.lastIndexOf('🍏'));

// 테스트
// git 