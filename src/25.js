'use strict';
function getCommonElements(array1, array2) {
  
  const newArray = [];
  for (let element of array1) {
    if(array2.includes(element)) {
       newArray.push(element)
    }
  }

  return newArray;
  
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
console.log(getCommonElements([11, 12, 29], [15, 11, 3, 12]));