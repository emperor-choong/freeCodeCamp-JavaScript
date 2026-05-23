function getLastLetter(str) {
    let alphabetOnly = str.match(/[a-zA-Z]/g).join("");

    let max = "a";
    if(alphabetOnly[0] === "A"){
        max = "A";
    }

    for(let i = 0; i < alphabetOnly.length; i++){
        let lower = alphabetOnly[i].toLowerCase();
        let value = lower.charCodeAt(0);
        if(value >= 97 && value <= 122){
            if(value > max.toLowerCase().charCodeAt(0)){
                max = alphabetOnly[i];
            }
        }
    }

    return max;
}

// console.log(getLastLetter("world"));
// console.log(getLastLetter("Hello World"));
// console.log(getLastLetter("The quick brown fox jumped over the lazy dog."));
// console.log(getLastLetter("HeLl0"));
// console.log(getLastLetter("!#$ er@R asd fT.,> 2t0e9"));