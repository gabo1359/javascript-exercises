const caesar = function(string,n) {
    let array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    string = string.toLowerCase()
    let new_string = ""
    let index = 0
    for (let i=0; i<string.length; i++) {
        if (array.includes(string[i])) {
            index = array.findIndex(ar => ar === string[i])
            if (index + n <= 25 && index + n >= 0) {
               new_string += array[index+n]   
            } else if (index + n < 0) {
                new_string += array[(index + n) + 26]   
            } else {
                new_string += array[(index + n) % 26]   

            }
        }
        else {
            new_string += string[i]
        }
    }
    new_string = new_string.split(" ")
    let result = []
    for (let j=0; j<new_string.length; j++) {
        result.push(new_string[j][0].toUpperCase() + new_string[j].substr(1))
    }
    result = result.join(" ")
    return result
};

// Do not edit below this line
module.exports = caesar;
