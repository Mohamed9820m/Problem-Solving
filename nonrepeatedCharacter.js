/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
    for (var i = 0; i < string.length; i++) {
        var currentChar = string[i];
        var isRepeated = false;

        for (var j = 0; j < string.length; j++) {
            if (i !== j && currentChar === string[j]) {
                isRepeated = true;
                break;
            }
        }

        if (!isRepeated) {
            return currentChar;
        }
    }

    return null; 
};
