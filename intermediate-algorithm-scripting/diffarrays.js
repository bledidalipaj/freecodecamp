/*
 Description
 ***********
 Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
 In other words, return the symmetric difference of the two arrays.

 */
function diffArray(arr1, arr2) {
	var items = arr1.concat(arr2);
	var newArr = items.filter(function(item) {
		if (arr1.indexOf(item) == -1 || arr2.indexOf(item) == -1) {
			return item;
		}
	});

	return newArr;
}