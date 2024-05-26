// Think of something you could store in a array. For example, you could make a list of mountains, 
//rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list 
//containing these items.

let favCities = ["makkah", "madina", "istabul", "islmabad", "dubai"]
console.log(favCities)
favCities.forEach((favCities, index)=> {console.log(`${index +1}.${favCities}`)}) 