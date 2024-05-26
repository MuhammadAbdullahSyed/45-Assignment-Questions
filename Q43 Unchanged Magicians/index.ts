//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the 
//array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
// separate array. Call show_magicians() with each array to show that you have one array of the original names and 
//one array with the Great added to each magician’s name.

let magiciansNames= ["a", "b", "c"]
let showMagicians = (magicians: string[]) => {
   for (let i=0; i<magiciansNames.length; i++)
console.log(magiciansNames[i])
}

let makeGreat = (magician:string[])=>{ 
    let greatmagicians: string[]=[]
magiciansNames.forEach((items)=>{return greatmagicians.push(`${items} the great .`)})
   
return greatmagicians
}

let greatmagicians2 = makeGreat(magiciansNames.slice())// creat modified array
console.log("Orginal Magician", magiciansNames)//print orgial array from top
console.log("Modified Magicians", greatmagicians2)//print modifed array
