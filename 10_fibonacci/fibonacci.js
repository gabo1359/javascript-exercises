const fibonacci = function(n) {
    if (n<=0) {return "OOPS"}
    array = [1,1]
    for (let i=2; i<Number(n); i++) {
        array[i]=array[i-1] + array[i-2]
    }
    return array[array.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
