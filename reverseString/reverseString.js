const reverseString = function(stringToReverse) {
    let splitString = stringToReverse.split("");
    let reversedString = "";
    for (i = 0; i < stringToReverse.length; i++) {
        reversedString += splitString.pop();
    }
    return reversedString;
}

module.exports = reverseString
