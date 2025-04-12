const sumAll = function (number1, number2) {
    let result = 0;
    if (number1 < 0 || number2 < 0) { result = 'ERROR' }
    else if (number1 % Math.floor(number1) !== 0 || number2 % Math.floor(number2) !== 0) { result = 'ERROR' }
    else if (typeof number1 !== 'number' || typeof number2 !== 'number') { result = 'ERROR' }
    else {
        for (let i = 0; i < (Math.abs(number2 - number1) + 1); i++) {
            if (number1 <= number2) {
                result += number1 + i;
            }
            else {
                result += number2 + i;
            }
        };
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
