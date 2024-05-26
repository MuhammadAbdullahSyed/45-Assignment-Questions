//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
//modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to 
//see that the list has actually been modified.

let magiciansNames= ["a", "b", "c"]
let showMagicians = (magicians: string[]) => {
   for (let i=0; i<magiciansNames.length; i++)
console.log(magiciansNames[i])
}
showMagicians(magiciansNames)


let makeGreat = (magician:string[])=>{
for (let i=0; i<magiciansNames.length; i++)
    console.log(`${magiciansNames[i]} the great `)
}

makeGreat(magiciansNames)


