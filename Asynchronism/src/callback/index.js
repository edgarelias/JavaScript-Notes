function sum(numA, numB) {
    return numA + numB;
}

function callbackFunc(numA, numB, callback) {
    return callback(numA, numB);
}

console.log(callbackFunc(2,2,sum));

