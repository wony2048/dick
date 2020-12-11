const { odd, even } = require("./module/var");
const checkNumber = require("./module/func");

function checkStringOddOrEven(str) {
    // if (str.length % 2) {
    //     return odd;
    // }
    // return even;
    return checkNumber(str.length);
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven("hello"));
