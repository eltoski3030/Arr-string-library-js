// This are module functions to simplify using them. For strings and Arrays.
// Built in functions might not be added. 
// 
// Converts an array to a string by concatenating all elements using a comma as the default separator.
//toString();


function stringThis (str){
 return str
}
stringThis()


// Joins all elements of an array into a single string using a specified separator.

//join();
function joinThis(join){
return join.join(' ')
}

// Concatenates two or more arrays and returns a new array without modifying the existing arrays.
//concat();

function concatThis(...arrays) {
  const element = [];
  element.push(...arrays); // Use spread operator to push individual elements
  const toConcat = () => {
    console.log(element.concat(arrays));
  }
  return element;
}

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
//splice();

function spliceThis(arr, index, del, value) {
  arr.splice(index, del, value);
  console.log(arr);
  return arr;
  //call function and substitute in the arguments starting: (array,start,to delete element, to add element )
}

// Returns a shallow copy of a portion of an array into a new array object selected from start to end.
//slice();
function sliceThis(arr, val1, val2) {
  const result = arr.slice(val1, val2);
  //substitute arguments: array, first index , last index
  return result;
}
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
//indexOf();



function indexOfThis(arr, value, repValue) {
  const startIndex = repValue !== undefined ? repValue : 0;
  const theIndex = arr.slice(startIndex).indexOf(value);
  return theIndex !== -1 ? theIndex + startIndex : -1;
}


// Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// lastIndexOf();

// Executes a provided function once for each array element.
// forEach();  // forEach(callback(element, index, array)):

function forEachThis(arr, func) {
  let funcc = () => {
    const resultArray = arr.map((element) => func(element))
  }
  return resultArray.func;
  //still figuring out how to resolve this function
}



// Creates a new array with the results of calling a provided function on every element in the array.
//map(); // map(callback(element, index, array))


function thisMap(selector, element, val) {
  let theMap;

  if (selector === multiply) {
    theMap = element.map((index) => index * val);
  } else if (selector === sum) {
    theMap = element.map((index) => index + val);
  }
  return theMap;
}
function multiply(x) {
  return x * 2;
}
function sum(x) {
  return x + 2;
}


// Pass a function to map

// Expected output: Array [2, 8, 18, 32]
// Creates a new array with all elements that pass the test implemented by the provided function.
filter(); // filter(callback(element, index, array)):

// Reduces the array to a single value by applying a function against an accumulator and each element.
reduce();

// Checks if at least one element in the array satisfies the provided testing function.
some();

// Checks if all elements in the array satisfy the provided testing function.
every();

// Returns a new array that is a one-level deep flattening of the original array.
flat();

// Returns the first element in the array that satisfies the provided testing function.
find();

// Returns the index of the first element in the array that satisfies the provided testing function, or -1 if none is found.
findIndex();

// Sorts the elements of an array in place, and returns the sorted array.
sort();




export default {
  stringThis,
  joinThis,
  concatThis,
  spliceThis,
  sliceThis,
  indexOfThis,
  forEachThis,
  thisMap
  };
