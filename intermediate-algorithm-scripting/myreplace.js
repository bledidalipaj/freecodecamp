/* Search and Replace
 * ------------------
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * 
 * NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace 
 * the word "Book" with the word "dog", it should be replaced as "Dog"
 *
 * Examples
 * --------
 * myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
 * myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
 * 
 * Useful methods
 * --------------
 * Array.prototype.splice()-> The splice() method changes the content of an array by removing existing elements 
 * and/or adding new elements.
 * String.prototype.replace()-> The replace() method returns a new string with some or all matches of a pattern 
 * replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a 
 * function to be called for each match.
 * Array.prototype.join()-> The join() method joins all elements of an array into a string.
 */
function myReplace(str, before, after) {
  function matchCase(s1, s2) {
    var newStr = '';
    if ( 'a' <= s1[0] && s1[0] <= 'z') {
      newStr = s2[0].toLowerCase();
    } else {
      newStr = s2[0].toUpperCase();
    }
    return newStr + s2.slice(1);
  }
  
  after = matchCase(before, after);
  return str.replace(before, after);
}