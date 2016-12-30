/**
 * Spinal Tap Case
 * ---------------
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 * Examples
 * --------
 * spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
 * spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
 * spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
 * spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
 * spinalCase("AllThe-small Things") should return "all-the-small-things".
 */
function spinalCase(str) {
  var words = [],
      tmpWord = str[0];
  
  for (var i = 1; i < str.length; i++) {
    if (!('a' <= str[i] && str[i] <= 'z')) {
      words.push(tmpWord.toLowerCase());
      
      // check if current symbol is a letter
      if ('a' <= str[i] && str[i] <= 'z' || 'A' <= str[i] && str[i] <= 'Z') {
        tmpWord = str[i];
      } else {
        tmpWord = '';
      }
      
    } else {
      tmpWord += str[i];
    }
  }
  words.push(tmpWord.toLowerCase());
  
  //remove word seperators (' ', '-', '_')
  words = words.filter(function(word) {
    return word.length > 1;
  });
  
  return words.join('-');
}