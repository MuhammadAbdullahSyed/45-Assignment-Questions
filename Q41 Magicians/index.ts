//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
//the name of each magician in the array.

let magiciansNames= ["a", "b", "c"]
let showMagicians = (magicians: string[]) => {
   for (let i=0; i<magiciansNames.length; i++)
console.log(magiciansNames[i])
}
showMagicians(magiciansNames)