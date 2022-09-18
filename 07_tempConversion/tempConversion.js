const ftoc = function(x) {
  x = (x - 32.0) * 5.0/9.0;
  let round1 = Math.round(x * 10) / 10;
  return round1;
};

const ctof = function(x) {
  x = (x * 9.0/5.0) + 32.0;
  let round1 = Math.round(x * 10) / 10;
  return round1;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
