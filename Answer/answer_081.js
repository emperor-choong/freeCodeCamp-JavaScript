function isValidMessage(message, validator) {
    let array = message.split(" ");
    let startLetter = array.map(word => word[0]);
    let result = startLetter.join("");

    if(result.toLowerCase() === validator.toLowerCase()){
        return true;
    }else{
        return false;
    }
}

// console.log(isValidMessage("hello world", "hw"));
// console.log(isValidMessage("ALL CAPITAL LETTERS", "acl"));
// console.log(isValidMessage("Coding challenge are boring.", "cca"));
// console.log(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"));
// console.log(isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"));