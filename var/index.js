const {odd, even} = require('.');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if(str.length % 2){ // 홀수면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));