// Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.
var favCities = ["makkah", "madina", "istabul", "islmabad", "dubai"];
console.log(favCities);
favCities.forEach(function (favCities, index) { console.log("".concat(index + 1, ".").concat(favCities)); });
