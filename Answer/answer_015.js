function digitsOrLetters(str) {
    let digits = "0123456789";
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let countDigit = 0;
    let countLetter = 0;
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < digits.length; j++){
            if(str[i] === digits[j]){
                countDigit++;
            }
        }

        for(let k = 0; k < letters.length; k++){
            if(str[i] === letters[k]){
                countLetter++;
            }
        }
    }

    if(countDigit > countLetter){
        return "digits";
    }else if(countDigit < countLetter){
        return "letters";
    }else{
        return "tie";
    }
}

// console.log(digitsOrLetters("abc123"));
// console.log(digitsOrLetters("a1b2c3d"));
// console.log(digitsOrLetters("1a2b3c4"));
// console.log(digitsOrLetters("abc123!@#DEF"));
// console.log(digitsOrLetters("H3110 W0R1D"));
// console.log(digitsOrLetters("P455W0RD"));