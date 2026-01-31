function detectAI(text) {
    let textWithoutPeriod = text.slice(0, text.length-1);

    let words = textWithoutPeriod.split(" ");
    let dashes = words.filter(word => word === "-");
    let parenthesis = words.filter(word => word[0] === "(" && word[word.length-1] === ")");
    
    let removeDashes = words.filter(word => word !== "-");

    let removePunctuation = removeDashes.map(word => {
        if(word[word.length-1] === "!"){
            return word.slice(0, word.length-1);
        }else if(word[0] === "(" && word[word.length-1] === ")"){
            return word.slice(1, word.length-1);
        }else{
            return word;
        }
    });

    let sevenOrMoreLettersWord = removePunctuation.filter(word => word.length >= 7);

    if(dashes.length >= 2){
        return "AI";
    }else if(parenthesis.length >= 2){
        return "AI";
    }else if(sevenOrMoreLettersWord.length >= 3){
        return "AI";
    }else{
        return "Human";
    } 
}

// console.log(detectAI("The quick brown fox jumped over the lazy dog."));
// console.log(detectAI("The hypersonic brown fox - jumped (over) the lazy dog."));
// console.log(detectAI("Yes - you're right! I made a mistake there - let me try again."));
// console.log(detectAI("The extraordinary students were studying vivaciously."));
// console.log(detectAI("The (excited) student was (coding) in the library."));