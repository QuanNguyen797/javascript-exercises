const fibonacci = function (number) {
    if (Number(number) < 0) {
        return "OOPS"
    }
    else {
        const obj = {};
        obj[0] = 0;
        obj[1] = 1;
        for (i = 2, n = Number(number); i <= n; i++) {
            obj[i] = obj[i - 1] + obj[i - 2];
        }
        return obj[number]
    };
};

// Do not edit below this line
module.exports = fibonacci;