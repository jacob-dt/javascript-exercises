const repeatString = function(str, x) {
  let output = '';
  for(let i = 0; i < x; i++) {
    if (x < 0) {
      output += 'ERROR';
    }
    else {
      output += str;
    }
  }
  return output;
};

console.log(repeatString('hello' , -1));

// Do not edit below this line
module.exports = repeatString;
