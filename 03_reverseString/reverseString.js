const reverseString = function(word) {
    let drow= word.slice(-1);
    for(i=0; i< word.length; i++){
        drow += word.slice(-(i+2),-(i+1))
    };
    return drow;
};

// Do not edit below this line
module.exports = reverseString;
