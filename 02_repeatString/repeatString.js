
const repeatString = function(word, num) {
    let phrase = "";
    if(num<0){return 'ERROR'}
    else {for(i=0; i<num; i++){
     phrase += word;
      
    }
    return phrase;  }
};

// Do not edit below this line
module.exports = repeatString;
