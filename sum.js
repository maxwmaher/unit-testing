//FUNCTION EXPRESSION
const sum = function(num1, num2) {
    if (num1 == undefined) {
        num1 = 0
    }
    if (num2 == undefined) {
        num2 = 0
    }
    return Number(num1) + Number(num2);
}

module.exports = sum;