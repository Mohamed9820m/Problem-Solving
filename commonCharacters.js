/**
 *
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 * Should return null or empty string of there is no commonCharacters
 *
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var Characters = function(string1, string2) {
  var arr = [];
  var arr2 = [];
  var ch = '';

  for (let i = 0; i < string1.length; i++) {
    arr.push(string1[i]);
    arr2 = [];

    for (let j = 0; j < string2.length; j++) {
      arr2.push(string2[j]);

      if (arr[i] === arr2[j]) {
        ch = ch + arr[i];
      }
    }
  }

  if (ch.length > 0) {
    return ch; 
  } else {
    return 'null';
  }
}
