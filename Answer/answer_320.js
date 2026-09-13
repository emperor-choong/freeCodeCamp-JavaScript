function blendWords(word1, word2) {
    let first = word1.length / 2;
    let second = word2.length / 2;

    let result1;
    let result2;
    if(Number.isInteger(first) === true){
        result1 = word1.slice(0, first);
    }else{
        let x = Math.floor(first);
        result1 = word1.slice(0, x);
    }

    if(Number.isInteger(second) === true){
        result2 = word2.slice(second);
    }else{
        let x = Math.floor(second);
        result2 = word2.slice(x);
    }

    return result1 + result2;
}

// console.log(blendWords("turtle", "toucan"));
// console.log(blendWords("chipmunk", "flamingo"));
// console.log(blendWords("falcon", "pelican"));
// console.log(blendWords("hyena", "iguana"));
// console.log(blendWords("scorpion", "gorilla"));
// console.log(blendWords("platypus", "wolverine"));