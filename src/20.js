'use strict';
function calculateTotalPrice(order) {
  let total = 0;
  
  for (let i = 0; i < order.length; i += 1){
  total = total + order[i];
  }
  
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([11, 29, 66, 84, 91]));
