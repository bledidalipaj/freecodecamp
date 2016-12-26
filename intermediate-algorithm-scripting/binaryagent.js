/**
 * Binary Agents
 * -------------
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 *
 * Examples
 * --------
 * binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 
 * 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") should return 
 * "Aren't bonfires fun!?"
 * 
 * binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 
 * 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001") should return "I love FreeCodeCamp!"
 * 
 * Useful methods 
 * --------------
 * String.fromCharCode()-> The static String.fromCharCode() method returns a string created by using the specified sequence 
 * of Unicode values.
 *
 * parseInt(string, radix)-> The parseInt() function parses a string argument and returns an integer of the specified radix 
 * (the base in mathematical numeral systems).

 */
 
function binaryAgent(str) {
  var decodedMsg = '',
      symbols = str.split(' ');
  
  for (var i = 0; i < symbols.length; i++) {
    decodedMsg += String.fromCharCode(parseInt(symbols[i], 2));
  }
  
  return decodedMsg;
}