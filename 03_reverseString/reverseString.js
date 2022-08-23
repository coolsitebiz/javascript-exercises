function reverseString(str) {
    let returnstring = '';
    if (str.length === 0 || !str) {
        return '';
    } else {
        for (let i = str.length - 1; i >= 0; i--) {
            returnstring += str[i];
        }
    }
    return returnstring;
}

// Do not edit below this line
module.exports = reverseString;
