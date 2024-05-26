//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will 
//need to enter a new username. If a username has not been used, print 
//a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["Abdullah", "taqdeeS", "A.wasay"];
var new_users = ["ahmer", "abdullah", "taqdees", "Owais", "saifullah"];
var _loop_1 = function (names) {
    if (current_users.some(function (item) { return item.toLowerCase() === names.toLowerCase(); })) {
        console.log("The person ".concat(names, " already been used"));
    }
    else
        console.log("".concat(names, " the username is available"));
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var names = new_users_1[_i];
    _loop_1(names);
}
