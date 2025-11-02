function getLongestWord(sentence) {
    let newSentence = sentence;
    if(sentence[sentence.length-1] === "."){
        newSentence = sentence.slice(0, sentence.length-1);
    }

    let array = newSentence.split(" ");
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i].length > max.length){
            max = array[i];
        }
    }

    return max;
}

// console.log(getLongestWord("coding is fun"));
// console.log(getLongestWord("Coding challenges are fun and educational."));
// console.log(getLongestWord("This sentence has multiple long words."));