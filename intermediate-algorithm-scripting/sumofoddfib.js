/**
 * Sum All Odd Fibonacci Numbers
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum 
 * of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
 */
function sumFibs(num) {
  function* fibGen() {
    var a = 0,
        b = 1;
    while (true) {
      yield a;
      var tmp = a;
      a = b;
      b = b + tmp;
    }
  }
  
  var gen = fibGen();
  var fibNum = gen.next().value;
  var res = 0;
  
  while (fibNum <= num) {
    if (fibNum % 2 !== 0) {
      res += fibNum;
    }
    fibNum = gen.next().value;
  }
  return res;
}