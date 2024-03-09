
//basic concepts
let name_of_person = 'Kevin';
let age = 18;
const greet = 'Hello';
console.log(greet +' ' + name_of_person + ', you are '+ age +' years old.');

//objects in js
let person = {
    name: 'Kevin',
    age: 18,
    greet: 'Hello',
    greetPerson: function() {
        console.log('from person object: ' + this.greet +' '+ this.name + ', you are '+ this.age +' years old.');
    },
};

person.greetPerson();
console.log(person);

//labels
const label01 = `this is a label of ${person.name}`;
console.log(label01);

//classes
class Person {
    constructor(name, age, greet) {
        this.name = name;
        this.age = age;
        this.greet = greet;
    }

    greetPerson() {
        console.log('from person class: '+ this.greet +' '+ this.name + ', you are '+ this.age +' years old.');
    }
}

const p1 = new Person('dave', 25, 'Hi');
p1.greetPerson();
console.log(p1);

//states in objects
const person_greet = p1.greetPerson;
person_greet.call({ name: 'dave', age: 25, greet: 'Hi' }); //.call => tell person_greet function to use this object as environment

//closures
const add = function(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

const addone = add(5);
const addtwo = addone(10);
console.log(`sum: ${addtwo}`);
console.log(add(7)(9)); //currying in js

//  IIFE - Immediately Invoked Function Expression
(function  doSomething(name) {
    console.log(`Hi ${name}. I am doing something`);
})('bobby');

//Lambda functions in js
((name) => {
    console.log(`Hi ${name}. I am doing something`);
})('alex');

const person2 = (() => {
    return {
        getName: () => { return 'bobby'; },
        setName: (name) => { this.name = name; },
    };
})();

console.log(person2);

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [ ...arr1, 4, 5, 6];
console.log(arr2);

((num1, num2, num3) => {
    console.log(num1 + num2 + num3);
})(...arr2);

//rest operator
function sum(nums) {
    
}