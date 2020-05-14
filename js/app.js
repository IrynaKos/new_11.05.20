'use strict';

let num = 20;

function showFierstMessaga(text) {
    console.log(text);
    console.log(num);
}

showFierstMessaga('Hello world!');
console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(2, 2));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;

const str = 'test';
console.log(str.toUpperCase());


let fruit = "Some fruit";
console.log(fruit.indexOf('q'));



