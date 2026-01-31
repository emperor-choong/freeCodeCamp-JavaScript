function compare(word, guess) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rules = {};
    for(let i = 0; i < alphabet.length; i++){
        let count = 0;
        for(let j = 0; j < word.length; j++){
            if(alphabet[i] === word[j]){
                count++;
            }
        }

        if(count > 0){
            rules[alphabet[i]] = count;
        }
    }

    let secretArray = word.split("");
    let guessArray = guess.split("");

    let exactMatch = guessArray.map((element, index) => {
        if(element === secretArray[index]){
            rules[element]--;
            return "2";
        }else{
            return element;
        }
    });

    let number = "012";
    let result = exactMatch.map(element => {
        if(secretArray.includes(element) === true && rules[element] !== 0){
            rules[element]--;
            return "1";
        }

        if(secretArray.includes(element) === true && rules[element] === 0){
            return "0";
        }
        
        if(number.includes(element) === true){
            return element;
        }
        
        if(secretArray.includes(element) === false){
            return "0";
        }
    });

    return result.join("");
}


// console.log(compare("APPLE", "POPPA"));
// console.log(compare("REACT", "TRACE"));
// console.log(compare("DEBUGS", "PYTHON"));
// console.log(compare("JAVASCRIPT", "TYPESCRIPT"));
// console.log(compare("ORANGE", "ROUNDS"));
// console.log(compare("WIRELESS", "ETHERNET"));