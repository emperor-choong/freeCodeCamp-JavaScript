function guessNumber(secret, guess) {
    if(secret > guess){
        return "higher";
    }else if(secret < guess){
        return "lower";
    }else if(secret === guess){
        return "you got it!";
    }
}

// console.log(guessNumber(50, 30));
// console.log(guessNumber(85, 99));
// console.log(guessNumber(2026, 2026));
// console.log(guessNumber(92904, 11283));
// console.log(guessNumber(230495, 423920));
// console.log(guessNumber(120349, 120349));