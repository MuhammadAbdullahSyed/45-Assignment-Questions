//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result for 
//each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
var num = "20";
console.log(num == "20");
console.log(num !== "20");
// • Tests using the lower case function
var nam = "Abc";
console.log(nam.toLocaleLowerCase() == "abc");
console.log(nam.toUpperCase() == "Abc");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
var num2 = 30;
var num3 = 40;
console.log(num2 == 30);
console.log(num2 !== 30);
console.log(num2 < num3);
console.log(num2 > num3);
console.log(num2 <= num3);
console.log(num2 >= num3);
//• Tests using "and" and "or" operators
console.log(num2 < num3 && num3 > num2);
console.log(num3 < num2 || num2 > num3);
// • Test whether an item is in a array
var places = ["makkah", "madina", "karachi", "dubai"];
console.log(places.indexOf("makkah") != -1);
console.log(places.indexOf("Makkah") == 1);
