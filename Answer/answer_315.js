function pigLatin(str) {
    let result = [];
    let array = str.split(" ");
    for(const word of array){
        let newWord = word.toLowerCase();
        if(/^[aeiou]/.test(word) === true){
            newWord = newWord + "way";
        }else{
            let index = -1;
            for(let i = 0; i < word.length; i++){
                if(/[^aeiou]/i.test(word[i]) === true){
                    index++;
                }else{
                    break;
                }
            }

            newWord = newWord.slice(index + 1) + newWord.slice(0, index + 1) + "ay";
            if(word[0] === word[0].toUpperCase()){
                newWord = newWord[0].toUpperCase() + newWord.slice(1);
            }
        }

        result.push(newWord);    
    }

    return result.join(" ");
}

// console.log(pigLatin("universe"));
// console.log(pigLatin("hello"));
// console.log(pigLatin("hello universe"));
// console.log(pigLatin("Hello universe"));
// console.log(pigLatin("Pig Latin is fun"));
// console.log(pigLatin("The quick brown fox jumped over the lazy dog"));