function hasConsonantCount(text, target) {
    let consonant = text.match(/(?![aeiou])[a-z]/gi);

    let numberOfConsonant;
    if(consonant === null){
        numberOfConsonant = 0;
    }else{
        numberOfConsonant = consonant.length;
    }
    
    if(numberOfConsonant === target){
        return true;
    }else{
        return false;
    }
}

// console.log(hasConsonantCount("helloworld", 7));
// console.log(hasConsonantCount("eieio", 5));
// console.log(hasConsonantCount("freeCodeCamp Rocks!", 11));
// console.log(hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24));
// console.log(hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23));