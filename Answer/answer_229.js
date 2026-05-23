function getOddWords(str) {
    let result = str.split(" ").filter(word => {
        return word.length % 2 === 1;
    });

    return result.join(" ");
}

// console.log(getOddWords("This is a super good test"));
// console.log(getOddWords("one two three four"));
// console.log(getOddWords("banana split sundae with rainbow sprinkles on top"));
// console.log(getOddWords("The quick brown fox jumped over the lazy river"));