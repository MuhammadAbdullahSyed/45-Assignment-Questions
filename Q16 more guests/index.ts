// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
//informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.





let guestList = ["taqdees", "wasay", "owais"];
//let notComming = "owais"
//let newGuest = "Saif"
//console.log(`Owais will wil not attending`)
//guestList[guestList.indexOf("owais")]= "Saif"
console.log(guestList)
guestList.unshift("Rehman")
console.log(guestList)
guestList.splice(2,0,"ahad")
console.log(guestList)
guestList.push("Nafay")
console.log(guestList)
guestList.map ((index)=>(console.log(`${index} You are invited for dinner on sunday`)))
