/**
 * Convert HTML Entities
 * ---------------------
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * 
 * Examples
 * --------
 * convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
 * convertHTML("<>") should return &​lt;&​gt;.
 * 
 * Useful methods
 * --------------
 * String.prototype.replace()-> The replace() method returns a new string with some or all matches of a pattern replaced by 
 * a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for 
 * each match.
 */
function convertHTML(str) {
  function replacer(match) {
    var newStr;
    
    if (match == '&') {
      newStr = '&amp;';
    } else if (match == '<') {
      newStr = '&lt;';
    } else if (match == '>') {
      newStr = '&gt;';
    } else if (match == '"') {
      newStr = '&quot;';
    } else {
      newStr = '&apos;';
    }
    return newStr;
  }
  
  var re = /[&<>"']/g;
  return str.replace(re, replacer);
}