/*
 Description
 ***********
 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 In other words, return the symmetric difference of the two arrays.
 
 */
function sumAll(arr) {
	var res = 0,
		maxValue = arr.reduce(function(a, b) {
			return Math.max(a, b);
		}),
		minValue = arr.reduce(function(a, b) {
			return Math.min(a, b);
		});

	for (var i = minValue; i <= maxValue; i++) {
		res += 1;
	}

	return res;
}