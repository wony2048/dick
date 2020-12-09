"use strict"

// es6
let global = 'global';
{
    let name = 'ella';
    console.log(name);
    name = 'hello';
    console.log(name);
}

console.log(name);
console.log(global);

const daysInWeek = 7;
const maxNumber = 5;
console.log(`value : ${daysInWeek}, type: ${typeof daysInWeek}`);
console.log(`value : ${maxNumber}, type: ${typeof maxNumber}`);

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// dynamic typing : dynamically typed language
let text = 'test';
console.log(text.charAt(0));
console.log(`value : ${text}, type : ${typeof text}`);
text = 1 + "5";
console.log(`value : ${text}, type : ${typeof text}`);
text = 1 * "5";
console.log(`value : ${text}, type : ${typeof text}`);
text = 1 / "5";
console.log(`value : ${text}, type : ${typeof text}`);

const ob  = {name : 'sw', age : 20};
console.log(`value : ${ob}, type : ${typeof ob}`);
console.log(`value : ${ob.name}, type : ${typeof ob.name}`);
console.log(`value : ${ob.age}, type : ${typeof ob.age}`);

ob.name = 'lsw';
ob.age = 27;
console.log(`value : ${ob.name}, type : ${typeof ob.name}`);
console.log(`value : ${ob.age}, type : ${typeof ob.age}`);

