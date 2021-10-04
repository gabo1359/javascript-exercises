const palindromes = function (string) {
    string = string.replace("!","").replace(/,/g,"").replace(".","").toLowerCase()
    string = string.split(" ")
    string = string.join("")
    let comp = string
    for (let i=0; i<string.length; i++) {
        if (string[i] === comp[string.length-1-i]) {
            continue
        } else {
            return false
        }
    }
    return true

};

// Do not edit below this line
module.exports = palindromes;
