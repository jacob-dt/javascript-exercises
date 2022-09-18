const sumAll = function(x, y) {
  let sum = 0;
  if (x > 0 && y > 0 && typeof x === 'number' && typeof y === 'number') {
    if (x < y) {
      while (x <= y) {
        sum = sum + x;
        x++;
      }
      return sum;
    }
    else {
      while (x >= y) {
        sum = sum + y;
        y++;
      }
      return sum; 
    }
  }
  else {
    return "ERROR";
  } 
};


// Do not edit below this line
module.exports = sumAll;
