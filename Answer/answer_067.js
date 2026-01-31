function count(str) {
    let vowel = "aeiou";
    let consonant = "bcdfghjklmnpqrstvwxyz";
    let countVowel = 0;
    let countConsonant = 0;
    for(let i = 0; i < str.length; i++){
        if(vowel.includes(str[i]) || vowel.toUpperCase().includes(str[i])){
            countVowel++;
        }

        if(consonant.includes(str[i]) || consonant.toUpperCase().includes(str[i])){
            countConsonant++;
        }
    }

    return [countVowel, countConsonant];
}

// console.log(count("Hello World"));
// console.log(count("JavaScript"));
// console.log(count("Python"));
// console.log(count("freeCodeCamp"));
// console.log(count("Hello, World!"));
// console.log(count("The quick brown fox jumps over the lazy dog."));