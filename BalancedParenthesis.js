/**
 * Balanced Parenthesis
 * Given a string, return true if it contains balanced parentheses ().
 * isBalanced("(x + y) - (4)")	// true
 * isBalanced("(((10 ) ()) ((?)(:)))")	// true
 * isBalanced("(50)(")	// false
 * isBalanced("") //	true
 *
 * @function isBalanced
 * @param {String} str
 * @return {Boolean}
*/
const isBalanced = function (str) {
    nbr = 0
    nbc = 0
    for (let i=0;i<str.length;i++)
        {
           if (str[i] === '(')
           {
            nbr = nbr + 1
           }
            else if (str[i] === ')')
            {
                 nbc = nbc + 1
            }
        }
    if (nbr === nbc)
    {
        return true
    }
    else return false 
}
