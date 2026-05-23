function isMirrorImage(str1, str2) {
    let symmetricChar = new Set(["W", "T", "Y", "U", "I", "O", "H", "A", "X", "V", "M", "w", "o", "x", "v", "0", "8", "=", "+", ":", "|", "-", "_", "*", "^", "!", ".", " "]);

    let mirroredPairs = {
        "[": "]",
        "]": "[",
        "{": "}",
        "}": "{",
        "<": ">",
        ">": "<",
        "b": "d",
        "d": "b",
        "p": "q",
        "q": "p",
        "(": ")",
        ")": "("
    };

    for(let char of str1){
        if(!symmetricChar.has(char) && !(char in mirroredPairs)){
            return false;
        }
    }

    let sum = "";
    for(let i = str1.length-1; i >= 0; i--){
        // Nullish coalescing operator (??)
        sum = sum + (mirroredPairs[str1[i]] ?? str1[i]);
    }

    return sum === str2; 
}

// console.log(isMirrorImage("[HOW]", "[WOH]"));
// console.log(isMirrorImage("MOM", "MOM"));
// console.log(isMirrorImage("vow", "wov"));
// console.log(isMirrorImage("TIM", "TIM"));
// console.log(isMirrorImage("{WOW}", "}WOW{"));
// console.log(isMirrorImage("XXVII", "IIV%X"));
// console.log(isMirrorImage("><(((*>", "<*)))><"));
// console.log(isMirrorImage("WTYUIOHAXVMwoxv08=+:|-_*^!.[]{}<>bdpq()", "()pqbd<>{}[].!^*_-|:+=80vxowMVXAHOIUYTW"));