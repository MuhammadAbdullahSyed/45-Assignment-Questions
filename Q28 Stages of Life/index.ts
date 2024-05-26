// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the 
//variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

import inquirer from "inquirer";
let userAnswer = await inquirer.prompt([{
type: "number",
message: "please enter age",
name: "age"
}])

if (userAnswer.age<2){
    console.log("person is a baby")
}
else if (userAnswer.age<=2 && userAnswer.age <4){
    console.log("person is a todler")
}
else if (userAnswer.age<=4 && userAnswer.age <13){
    console.log("person is a kid" )
}
else if (userAnswer.age<=13 && userAnswer.age <20){
    console.log("person is a teenager")
}
else if (userAnswer.age<=20 && userAnswer.age <65){
    console.log("person is a adult")
}
else (console.log("that the person is an elder"))



//let age = 3;

// if (age<2){
//     console.log("person is a baby", age)
// }
// else if (age<=2 && age <4){
//     console.log("person is a todler", age)
// }
// else if (age<=4 && age <13){
//     console.log("person is a kid", age)
// }
// else if (age<=13 && age <20){
//     console.log("person is a teenager", age)
// }
// else if (age<=20 && age <65){
//     console.log("person is a adult", age)
// }
// else (console.log("that the person is an elder", age))
