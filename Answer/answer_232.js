function compress(str) {
    let array = str.split(" ");
    let firstSeen = new Map();
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let word = array[i];

        if (!firstSeen.has(word)) {
            firstSeen.set(word, i + 1);
            result.push(word);
        } else {
            result.push(firstSeen.get(word));
        }
    }

    return result.join(" ");
}

// console.log(compress("practice makes perfect and perfect practice makes perfect"));
// console.log(compress("hello hello hello"));
// console.log(compress("the cat sat on the mat on which the cat sat"));
// console.log(compress("the more you know the more you realize you don't know"));
// console.log(compress("lorem ipsum dolor sit per elit donec sit nostra libero per donec ligula sit gravida at elit vitae a elit sodales donec en donec at dolor nam ligula dignissim risus at ligula per nam ipsum ipsum gravida en elit per ipsum ligula en gravida per sodales sit at nam lorem sit per libero en ipsum elit sit sodales sit risus elit risus ipsum elit at gravida vitae en dignissim nam sit vitae sollicitudin per nostra per sit libero"));