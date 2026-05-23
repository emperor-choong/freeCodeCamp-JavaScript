function convertWords(str) {
    let array = str.split(" ");
    let result = array.map(x => {
        return x.length;
    });

    return result.join(" ");
}

// console.log(convertWords("hello world"));
// console.log(convertWords("Thanks and happy coding"));
// console.log(convertWords("The quick brown fox jumps over the lazy dog"));
// console.log(convertWords("Lorem ipsum dolor sit amet consectetur adipiscing elit donec ut ligula vehicula iaculis orci vel semper nisl"));