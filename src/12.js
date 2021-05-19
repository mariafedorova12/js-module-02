'use strict';
function makeStringFromArray(array, delimeter) {
  let string;
  
 string = array.join(delimeter);
 
  return string;
}
console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

