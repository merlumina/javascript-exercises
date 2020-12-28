const removeFromArray = function(array, item, numberToRemove = 1) {
    const ourIndex = array.indexOf(item);
    array.splice(ourIndex, numberToRemove);
    return array;
}

module.exports = removeFromArray
