/**
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items..
 *
 *
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/
var evenOccurrence = function(arr) {
  var oc=[]
for (i=0;i<arr.length;i++)
    {
        for (j=i+1;j<arr.length;j++)
            {
               if ((arr[i] % 2 === 0)&& (arr[i] === arr[j]))
               {
                   oc.push(arr[i])
                   return occ[0]
               }
                
            }
        return null
      
    }
};