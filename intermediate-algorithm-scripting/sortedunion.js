/*
 Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

 In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

 The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

 Examples
 --------
 uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
 uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
 uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
 uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].

 Tips
 ----
 Arguments object-> The arguments object is an Array-like object corresponding to the arguments passed to a function.
 The arguments object is a local variable available within all functions. You can refer to a function's arguments within the function 
 by using the arguments object. This object contains an entry for each argument passed to the function, the first entry's index starting 
 at 0.

 */

 function uniteUnique(arr) {
 	// convert the arguments object to an Array
 	var args = Array.prototype.slice.call(arguments);
 	var uniqueArr = [];

 	for (var i = 0; i < args.length; i++) {
 		var array = args[i];
 		for (var j = 0; j < array.length; j++) {
 			if (uniqueArr.indexOf(array[j]) == -1) {
 				uniqueArr.push(array[j]);
 			}
 		}
 	}

 	return uniqueArr;
 }