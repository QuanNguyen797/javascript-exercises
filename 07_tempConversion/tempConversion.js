const convertToCelsius = function(tempF) {
  let result;
  result= Math.round(((tempF -32)/(9/5))*10) / 10;
  return result;
};

const convertToFahrenheit = function(tempC) {
  let result;
  result= Math.round((tempC*(9/5)+32)*10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
