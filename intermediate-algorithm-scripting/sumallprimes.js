/*
 Sum all the prime numbers up to and including the provided number.

 A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number 
 because it's only divisible by one and two.

 The provided number may not be a prime.
 */

 function sumPrimes(num) {
 	function isPrime(num) {
 		if (num < 2) {
 			return false;
 		}

 		var i = 2;
 		while (i * i <= num) {
 			if (num % i == 0) {
 				return false;
 			}
 			i++;
 		}
 		return true;
 	}

 	var res = 0;
 	for (var i = 2; i <= num; i++) {
 		if (isPrime(i)) {
 			res += i;
 		}
 	}

 	return res;
 }