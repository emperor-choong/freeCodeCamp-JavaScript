function getWordScore(word) {
    let sum = 0;
    for(let i = 0; i < word.length; i++){
        sum = sum + word[i].toUpperCase().charCodeAt(0) - 64;
    }

    return sum;
}

// console.log(getWordScore("hi"));
// console.log(getWordScore("hello"));
// console.log(getWordScore("hippopotamus"));
// console.log(getWordScore("freeCodeCamp"));