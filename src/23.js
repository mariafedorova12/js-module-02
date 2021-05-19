//'use strict';
function filterArray(numbers, value) {
  
  const bigger = [];
      for (const number of numbers){
   
      if (number > value) {
          bigger.push(number);
      }
  }
  
 return bigger; 
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
console.log(filterArray([91, 84, 66, 17, 07], 37));
