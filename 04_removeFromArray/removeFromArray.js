const removeFromArray = function(ar) {
    let arr = arguments[0];
    let args = [...arguments].slice(1);

    for (let arg of args) {
        let index = arr.indexOf(arg);
        if (index < 0) {
            continue;
        } else {
            arr.splice(index, 1);
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
