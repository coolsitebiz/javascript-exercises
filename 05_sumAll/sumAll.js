const sumAll = function(num1, num2) {

if (num1 < 0 || num2 < 0 ) {
    return 'ERROR';
}

if (typeof num1 === 'string' || num1 instanceof String || typeof num2 === 'string' || num2 instanceof String) {
    return 'ERROR';
}

if (isNaN(num1) || isNaN(num2)) {
    return 'ERROR';
}

let total = 0;
let bigger = num1 > num2 ? num1 : num2;
let smaller = num1 < num2 ? num1 : num2;
while (smaller <= bigger) {
    total += smaller++;
}
return total;

};

// Do not edit below this line
module.exports = sumAll;
