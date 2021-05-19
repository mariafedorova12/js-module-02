'use strict';
function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line
let result;
 result = message.split(' ');
 return result.length * pricePerWord;


  // Change code above this line
}
console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20) );