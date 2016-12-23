/* Everything Be True
 * ------------------
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * Remember, you can access object properties through either dot notation or [] notation.
 *
 * Examples 
 * --------
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, 
 * {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return true.
 *
 * truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, 
 * {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") should return false.
 *
 * truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, 
 * {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, 
 * {"user": "Po", "sex": "female", "age": 4}], "age") should return false.
 * 
 * truthCheck([{"single": "double"}, {"single": undefined}], "single") should return false
 * 
 * Useful methods
 * --------------
 * Object.prototype.hasOwnProperty()-> The hasOwnProperty() method returns a boolean indicating whether 
 * the object has the specified property.
 *
 */
function truthCheck(collection, pre) {
  for(var i = 0; i < collection.length; i++) {
    var object = collection[i];
    
    if (!object.hasOwnProperty(pre) || !object[pre]) {
      return false;
    } 
  }
  return true;
}