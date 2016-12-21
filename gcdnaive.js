/**
 * Calculate the Greatest Common Divisor(GCD) of two numbers.
 * Greatest common divisor (GCD) is the largest integer that evenly divides both of the given numbers.
 *
 * Example
 * For a = 4 and b = 6, the output should be
 * gcdNaive(a, b) = 2.
 */
function gcdNaive(a, b) {

  var gcd = 1;
  for (var divisor = 2; divisor <= Math.min(a, b); divisor++) {
    if (a % divisor === 0 && b % divisor === 0) {
      gcd =  divisor;
    }
  }

  return gcd;
}
