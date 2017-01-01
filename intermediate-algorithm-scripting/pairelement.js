/**
 * DNA Pairing
 * -----------
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
 * Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 * Return the provided character as the first element in each array.
 * For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 * The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 * 
 * Examples
 * --------
 * pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
 * pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
 * 
 * Useful methods
 * --------------
 * Array.prototype.push()-> The push() method adds one or more elements to the end of an array and returns the new length of 
 * the array.
 * String.prototype.split()-> The split() method splits a String object into an array of strings by separating the string into 
 * substrings.
 */
function pairElement(str) {
  var basePairs = [];
  
  for (var i = 0; i < str.length; i++) {
    var element = str[i];
    
    if (element == 'G') {
      basePairs.push([element, 'C']);
    } else if (element == 'C') {
      basePairs.push([element, 'G']);
    } else if(element == 'A') {
      basePairs.push([element, 'T']);
    } else if (element == 'T') {
      basePairs.push([element, 'A']);
    }
  }
  
  return basePairs;
}