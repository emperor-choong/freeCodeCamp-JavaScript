function addPunctuation(sentences) {
    // Lookahead assertion: (?=...), (?!...)
    let regex = /\s(?=[A-Z])/g;
    let result = sentences.replace(regex, ". ") + ".";

    return result;
}

// console.log(addPunctuation("Hello world"));
// console.log(addPunctuation("Hello world It's nice today"));
// console.log(addPunctuation("JavaScript is great Sometimes"));
// console.log(addPunctuation("A b c D e F g h I J k L m n o P Q r S t U v w X Y Z"));
// console.log(addPunctuation("Wait.. For it"));