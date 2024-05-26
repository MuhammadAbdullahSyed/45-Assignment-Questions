//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with 
//a different message.
var makeshirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("the size of shirt is ".concat(size, " and message is ").concat(message));
};
makeshirt();
makeshirt("medium");
makeshirt("small", "ABC");
