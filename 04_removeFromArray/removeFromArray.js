const removeFromArray = function(arr, ...args) {
  
  //first element in args array is the array that we are checking
  let a = arr;

  //filter() function will return a new array containing all the array elements that pass the given condition. 
  //If no elements pass the condition it returns an empty array.

  //adds array values to new array if they are not included in args[0].
  let b = a.filter(values => !args.includes(values));
  return b;

  /*const array = arrValues[0];
  const newArray = [];

  array.forEach(item => {
    if (!arrValues.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray; */
}; 

// Do not edit below this line
module.exports = removeFromArray;
