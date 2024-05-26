// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
//Each time you pop a name from your list, print a message to that person letting them know you’re 
//sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure 
//you actually have an empty list at the end of your program.
var guestList = ['Rehman', 'taqdees', 'ahad', 'wasay', 'owais', 'Nafay'];
console.log(guestList);
console.log("I can host only 2 persons as my new dinning table not deliverd");
//console.log(`${guestList} I can host only 2 persons as my new dinning table not deliverd`)
while (guestList.length > 2) {
    var notInvited = guestList.pop();
    console.log("".concat(notInvited, " Sorry You are not invited for the dinner"));
}
guestList.map(function (item) { return console.log("Dear ".concat(item, " You are still invited for the dinner")); });
guestList.pop();
guestList.pop();
console.log(guestList);
// guestList.unshift("Rehman")
// console.log(guestList)
// guestList.splice(2,0,"ahad")
// console.log(guestList)
// guestList.push("Nafay")
// console.log(guestList)
// guestList.map ((index)=>(console.log(`${index} You are invited for dinner on sunday`)))
