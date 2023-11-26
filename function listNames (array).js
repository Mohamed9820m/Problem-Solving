function listNames (array)
{
    let fil = reduce(array,function(acc,element,i){
       for (j=i+1;j<array.length;j++)
       {
        if (array[j].name.charAt(0)<element.name.charAt(0))
        {
            let temp = array[j]
            array[j] = element
            element = temp
        }
        else if (array[j].name.charAt(0)===element.name.charAt(0))
        {
            let nbr = 1
            if  (array[j].name.charAt(nbr)<element.name.charAt(nbr))
            {
                let temp = array[j]
                array[j] = element
                element = temp
            } else nbr ++ 
        }
 
       }
       acc.push(element)
        return acc
    },[])
    let display = map(fil,function(element,i){
        return {name : element.name}
    })
    return display 
}

function filterByGender (array,gender)
{
    let fil = filter (array,function(element,i)
    {
        return element.gender === gender   
    })
    let mo = map(fil,function(elem,i)
    {
        return {name : elem.name,gender:elem.gender}
    })
    return mo
}

function groupByAge (array)
{
    let fil = filter (array,function(element,i)
    {
        return element.age  
    })
    let mo = map(fil,function(elem,i)
    {
        return {name : elem.name,age:[elem.age]}
    })
    return mo
}
function mostCommonHobby (array)
 {
    a = map (array,function(element,index){
        return element.hobbies
    }).flat()
     
    b = reduce (a,function(acc,element)
    {
        for (j=i+1;j<a.length;j++)
        {
            if element === a[j]
            {
                s = s+1
                if (s > (a.length/2))
                {
                    return element
                }
            }
        }
    },0)
    return b 
 }
