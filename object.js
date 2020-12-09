// "use strict"

// 1. Literals and properties
const obj1 = {}; // object literal syntax
const obj2 = new Object() // object constructor syntax


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ella = { name: 'ella', age: 5 };
print(ella);

ella.hasJob = true;
console.log(ella.hasJob);

delete ella.hasJob;
console.log(ella.hasJob);

// 2. Computed properties
console.log(ella.name);
console.log(ella['name']);
ella['hasJob'] = true;
console.log(ella.hasJob);

function printValue(obj, key){
    // console.log(obj.key);
    console.log(obj[key]);
}

printValue(ella, 'name');
printValue(ella, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = new Person('ella', 30);

console.log(person4);

// 4. Constructor Funtion
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ella);
console.log('age' in ella);
console.log('random' in ella);
console.log(ella.random);

// 6. for..in vs for..of
console.clear();
for (key in ella){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for( value of array){
    console.log(value);
}

// 7. Fun cloning
const user = {name: 'ella', age: 20};
const user2 = user;

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}

user2.name = 'coder';
console.log(user2);

// console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);

console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const fruit3 = {color: 'white', size: 'bigbig'};
const fruit4 = {color: 'green', size: 'bigbig', fun : true};
// const mixed = Object.assign(fruit1, fruit2, fruit3, fruit4);
const mixed = Object.assign(fruit1, fruit2, fruit3, fruit4);
console.log(mixed);