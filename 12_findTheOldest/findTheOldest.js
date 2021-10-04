const findTheOldest = function(array) {
    let list = []
    for (let i=0; i<array.length; i++) {
        if ("yearOfDeath" in array[i]) {
            list.push(array[i]["yearOfDeath"]-array[i]["yearOfBirth"])
        } else {
            array[i]["yearOfDeath"] = 2021
            list.push(array[i]["yearOfDeath"]-array[i]["yearOfBirth"])
        }
        
    }
    let val = 0
    let old = list[val]
    for (let i=1; i<list.length; i++) {
        if (list[i] > old) {
            old = list[i]
            val = i
        }
    }
    return array[val]
};

// Do not edit below this line
module.exports = findTheOldest;
