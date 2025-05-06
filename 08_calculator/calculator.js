const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (numbers) {
  return numbers.reduce(
    (total, current) => total + current
    , 0)
};

const multiply = function (numbers) {
  return numbers.reduce((total, current) => total * current,)
};

const power = function (a, b) {
  let c = 1;
  for (i = 0; i < b; i++) {
    c *= a;
  };
  return c;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  }
  else {
    let b = 1;
    for (i = 0; i < a; i++) {
      b *= (i + 1);
    };
    return b;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
