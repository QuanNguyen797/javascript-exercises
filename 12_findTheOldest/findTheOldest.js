const findTheOldest = function (arr) {
    const arr1 = arr.map(
        (person) => {
            let now=new Date().getFullYear();
            if (person.yearOfDeath) {return person.yearOfDeath - person.yearOfBirth}
                    else {return now-person.yearOfBirth}}
        );

    let max = 0;
    for (i = 0; i < arr1.length; i++) {
        if (max < arr1[i]) {
            max = arr1[i];
        };
    }

    for (i = 0; i < arr1.length; i++) {
        if (max == arr1[i]) {
            return arr[i];
        }
    }
}
// Do not edit below this line
module.exports = findTheOldest;
