const removeFromArray = function (items, item, ...manyMoreArgs) {

    while (items.indexOf(item) !== -1) {
        items.splice(items.indexOf(item), 1);
    };
    for (const i of manyMoreArgs) {
        if (items.indexOf(i) !== -1) {
            items.splice(items.indexOf(i), 1);
        }
        else { continue }

    }
    return items;
};

// Do not edit below this line
module.exports = removeFromArray;
