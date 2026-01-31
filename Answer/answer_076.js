function longestWord(sentence) {
    let array = sentence.split(" ");
    let arr = array.map(word => removePunctuation(word));
    let result = arr.reduce((accumulator, currentValue) => {
        if(currentValue.length > accumulator.length){
            return currentValue;
        }else{
            return accumulator;
        }
    });

    return result;
}

function removePunctuation(word){
    let letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sum = "";
    for(let i = 0; i < word.length; i++){
        if(letter.includes(word[i]) === true){
            sum = sum + word[i];
        }
    }

    return sum;
}

// console.log(longestWord("The quick red fox"));
// console.log(longestWord("Hello coding challenge."));
// console.log(longestWord("Do Try This At Home."));
// console.log(longestWord("This sentence... has commas, ellipses, and an exlamation point!"));
// console.log(longestWord("A tie? No way!"));
// console.log(longestWord("Wouldn't you like to know."));