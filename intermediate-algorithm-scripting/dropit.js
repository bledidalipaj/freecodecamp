/*
 * Drop it
 * -------
 * Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns 
 * true.
 *
 * The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop 
 * it or not.
 * 
 * Return the rest of the array, otherwise return an empty array.
 *
 * Examples
 * --------
 * dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
 * dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
 * dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
 *
 * Useful methods
 * --------------
 * Array.prototype.shift()-> The shift() method removes the first element from an array and returns that element. This method 
 * changes the length of the array.
 * Array.prototype.slice()-> The slice() method returns a shallow copy of a portion of an array into a new array object selected 
 * from begin to end (end not included). The original array will not be modified.
 *
 */
function dropElements(arr, func) {
  var index = 0,
      startIndex = null;
  
  while (startIndex < arr.length) {
    if (func(arr[index])) {
      break;
    }
    index++;
  }
  startIndex = index;
  
  return arr.slice(startIndex);
}