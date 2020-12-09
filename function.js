"use strict"

function printHello(){
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}

log('Hello@');
log(123);

function changeName(obj){
    obj.name = 'coder';
}

const ella = {name:'ella'};
console.log(ella);
changeName(ella);
console.log(ella);

// Default prameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

// Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', {name : 'test', num : 78}, 'ella');

// Early return, early exit
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
}

// Function expression
const print = function(){ // anonymous function
    console.log('print');
}
print();

const printAgain = print;
printAgain();

// Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes!');
}

const printNo = function print(){
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
const simplePrint = () => console.log('simplePrint!');
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello(aa) {
    console.log('IIFE' + aa);
})('sadfg');

// Fun quiz time ❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
function calculate(commnand, a, b){
    console.log(`command : ${commnand}, a : ${a}, b : ${b}, result =  ${commnand(a, b)}`);
}

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const divide = (a, b) => a / b;
const multiply = (a, b) => a * b;
const remainder = (a, b) => a % b;
calculate(add, 5, 7);
calculate(substract, 5, 7);
calculate(divide, 5, 7);
calculate(multiply, 5, 7);
calculate(remainder, 5, 7);
