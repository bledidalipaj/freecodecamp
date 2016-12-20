/*
 Description
 ***********
 Find the missing letter in the passed letter range and return it.

 If all letters are present in the range, return undefined.

 Example
 -------
 fearNotLetter("abce") should return "d"
 fearNotLetter("abcdefghjklmno") should return "i"
 fearNotLetter("bcd") should return undefined.


 Helpful String methods
 ----------------------
 String.prototype.charCodeAt() -> The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 
 code unit at the given index.

 String.fromCharCode() -> The static String.fromCharCode() method returns a string created by using the 
 specified sequence of Unicode values.

 */
function fearNotLetter(str) {
	var prevCharCode = str[0].charCodeAt();

	for (var i = 1; i < str.length; i++) {
		var curCharCode = str[i].charCodeAt();
		if (curCharCode - prevCharCode > 1) {
			return String.fromCharCode(prevCharCode + 1);
		}
		prevCharCode = curCharCode;
	}

	return undefined;
}