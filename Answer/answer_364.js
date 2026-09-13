function isPangram(sentence, letters) {
    let result1 = [...new Set(sentence.toLowerCase().match(/[a-z]/g))].sort().join("");
    let result2 = letters.split("").sort().join("");

    return result1 === result2;
}

// console.log(isPangram("hello", "helo"));
// console.log(isPangram("hello", "hel"));
// console.log(isPangram("hello", "helow"));
// console.log(isPangram("hello world", "helowrd"));
// console.log(isPangram("Hello World!", "helowrd"));
// console.log(isPangram("Hello World!", "heliowrd"));
// console.log(isPangram("freeCodeCamp", "frcdmp"));
// console.log(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));