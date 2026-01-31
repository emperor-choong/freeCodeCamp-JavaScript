function countCharacters(sentence) {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let result = [];
    for(let i = 0; i < alpha.length; i++){
        let count = 0;
        for(let j = 0; j < sentence.length; j++){
            if(alpha[i] === sentence[j].toLowerCase()){
                count++;
            }
        }

        if(count > 0){
            result.push(`${alpha[i]} ${count}`);
        }   
    }

    return result;
}

// console.log(countCharacters("hello world"));
// console.log(countCharacters("I love coding challenges!"));
// console.log(countCharacters("// TODO: Complete this challenge ASAP!"));