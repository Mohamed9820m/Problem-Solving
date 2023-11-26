/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */
aaaaaaaa
/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var ran = []
  var cha = ''
  var res = []
for (let i=0;i<string.length;i++)
    {
        console.log('hii1')
       ran.push(string[i])
    }
var ch = [ran[Math.floor(Math.random()*ran.length)]]
  for (let i=0;i<res.length;i++) {
                console.log('hii2')

      
           res.push(ch)
      }
           return res
}