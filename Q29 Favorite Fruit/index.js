//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
// that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fruit = ["apple", "lecche", "kiwi"];
if (fruit.indexOf("kiwi") !== -1) {
    console.log("i really like kiwi");
}
if (fruit.indexOf("apple") !== -1) {
    console.log("i really like apple");
}
if (fruit.indexOf("lecche") !== -1) {
    console.log("i really like lecche");
}
if (fruit.indexOf("falsa") == -1) {
    console.log("falsa fruit is not in array");
}
if (fruit.indexOf("mango") == -1) {
    console.log("mangos fruit is not in array");
}
