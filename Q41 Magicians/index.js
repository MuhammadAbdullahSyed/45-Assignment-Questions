//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints 
//the name of each magician in the array.
var magiciansNames = ["a", "b", "c"];
var showMagicians = function (magicians) {
    for (var i = 0; i < magiciansNames.length; i++)
        console.log(magiciansNames[i]);
};
showMagicians(magiciansNames);
