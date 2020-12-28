const sumAll = function(firstNumber, secondNumber) {
    let finalSum = 0;
    let numArray = [firstNumber, secondNumber];
    numArray.sort(function(a, b) {
        return a - b;
    });
    if (typeof(firstNumber) != "number" || typeof(secondNumber) != "number" || firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    } else {
        for (i = numArray[0]; i <= numArray[1]; i++) {
            finalSum += i;
        };
    };
    return finalSum;
}

module.exports = sumAll
