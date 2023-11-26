/**
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
* @function rockPaperScissors
* @param {Number} rounds - number of throws
* @return {Array<string>}
*/

var rockPaperScissors = function (rounds) {
    var rounds = rounds || 3;
    var t = ['R','P','S']
    var ch = ''
    var k = []
    for (j=0;j<rounds*rounds;j++)
        {
           
    for (i=0;i<t.length;i++)
        {          
            ch = ch + t[i]
            k.push(ch)
            
        } 
           
        }
             return k 

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ignore the below code // //
module.exports = rockPaperScissors;
// // // // // // // // // //
