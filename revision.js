function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function (element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }

//1
  function higher (array)
  {
    return filter (array,function(element,key)
    {
        return element.grade >= 90
    })
  }
//2
function display (array)
{
    return map (array,function(element,key)
    {
        return element.name
    })
}
//3
function avg (array)
{
    
    return reduce (array,function(acc,element){
        return s= (acc + element.grade)/array.length 
    
    },0)
}
//4
function fil (array)
{
    return filter (array,function(element,key)
    {
        return element.level === 'A+'
    })
}
//5
function grade (array)
{
    return map (array,function(element,key)
    {
        return element.grade
    })
}
//6 
function highestee (array)
{
    let heighest = function ()
    {
        let max = array[0].grade
        for (let j=1 ; j < array.length ; j++)
        {
            if (max < array[j].grade)
            {
                max = array[j].grade 
            }
        } return max 
    }
    return filter (array,function(element)
    {
          return element.grade === heighest() ;
        });
    }
 
    function levb(array) {
        let filteredArray =  filter(array,function(elem, i) {
          return elem.level === "B";
        });
        let sum =  reduce(filteredArray,function(acc, element) {
          return acc + element.grade;
        }, 0);
        let average = (sum / filteredArray.length)
        return average;
      }

      function sortedd(array) {
        let sorted = reduce(array, function(acc, element, i) {
          for (let j = i + 1; j < array.length; j++) {
            if (element.grade > array[j].grade) {
              let temp = element;
              element = array[j];
              array[j] = temp;
            }
          }
          acc.push(element);
          return acc;
        }, []);
        let tab = map(sorted, function(elem, i) {
          return { name: elem.name, grade: elem.grade };
        });
        return tab;
      }

      



