'use strict';
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2) ;
const nonExtremeEls = fruits.slice(1,-1);
const lastThreeEls = fruits.slice(-3);

console.log(fruits.slice(0,2));
console.log(fruits.slice(1,-1));
console.log(fruits.slice(-3));