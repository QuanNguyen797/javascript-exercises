const palindromes = function (text) {
    let text1= text.toLowerCase().replace(/[^a-z0-9]/g, '');
    let obj=text1.split('');
    let reversed= obj.reverse()
                .join('');
    if(reversed===text1){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
