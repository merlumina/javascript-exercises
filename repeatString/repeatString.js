let repeatedString = ""

const repeatString = function(aString, number) {
    if (number < 0) {
        return "ERROR"
    } else {
        for (i = 0; i < number; i++) {
            repeatedString += aString;
        }
        return repeatedString;}
}

module.exports = repeatString
