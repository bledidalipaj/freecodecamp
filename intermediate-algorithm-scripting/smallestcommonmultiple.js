/**
 * Smallest Common Multiple
 * ------------------------
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential 
 * numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 * 
 */
function smallestCommons(arr) {
  function euclidGcd(a, b) {
    if (b === 0) {
      return a;
    }else {
      return euclidGcd(b, a % b);
    }
  }
  
  function lcm(a, b) {
    return Math.abs(a * b) / euclidGcd(a, b);
  }
  
  var smallestCommonMultiple = 1;
  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    smallestCommonMultiple = lcm(smallestCommonMultiple, i);
  }
  
  return smallestCommonMultiple;
}