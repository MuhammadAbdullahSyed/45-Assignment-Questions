// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var admin = ["admin", "Eric", "abc", "xyz", "mno"];
if (admin.length == 0) {
    console.log("we need to find some users!");
}
else {
    for (var i = 0; i < admin.length; i++)
        console.log(admin[i]);
}
var NewAdmin = [];
if (NewAdmin.length == 0) {
    console.log("we need to find some users!");
}
