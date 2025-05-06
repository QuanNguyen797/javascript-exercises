const palindromes = function (text) {
    let obj=text.split('');
    let reversed= obj.reverse()
                .join('');
    if(reversed===text){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
