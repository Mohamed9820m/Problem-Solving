function unique (number) { 
    var tab = [number[0]]
 for (k=0;k<number.length;k++){
 each(number,function(element,i){
     
    
     if ((element !== number[k]) && (k!==i))
     {
         if (!tab.includes(element))
         {
         tab.push(element) 
             console.log(number[k], element)
             console.log(element !== number[k])
                             console.log(tab)

         }
     }

     }
      
 )
 }
 return tab

 function unique(arr){
    var x = []
    each(arr,function(element,ind){
        if(arr.indexOf(element) === ind){
            x.push(element)
        }
    })
    return x
}


// to fix 
function array(array) {
    var acc = [];
    var concatenatedArray = array.flat();
    var max = concatenatedArray[0];  
    map(concatenatedArray, function(element, i) {
      if (element > max) {
  
        max = element;
      } else {
        return('error');
      }
    });
    acc.push(max);
    return acc;
  }


