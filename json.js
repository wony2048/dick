'use strict'

class Rabbit{
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.size = null;
        this.birthDate = new Date();
    }

    jump(){
        console.log(`jump ${this.name} you can do it`);
    }
}

// 1. Object to JSON
let rabbit = new Rabbit('tori', 'yellow');
let rabbitString = JSON.stringify(rabbit);
console.log(rabbitString);
rabbit.jump();

// 2. Json to Object
let rabbitObject = JSON.parse(rabbitString);
let rabbitObject1 = Object.assign(new Rabbit, rabbitObject);
console.log(rabbitObject1);
rabbitObject1.jump();