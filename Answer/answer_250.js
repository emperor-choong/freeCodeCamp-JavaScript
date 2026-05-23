function getFrequency(str) {
    let result = {};
    for(let character of str){
        if(result[character] === undefined){
            result[character] = 1;
        }else{
            result[character]++;
        }
    }

    return result;
}

// console.log(getFrequency("test"));
// console.log(getFrequency("mississippi"));
// console.log(getFrequency("hello world"));
// console.log(getFrequency("She sells seashells by the seashore."));
// console.log(getFrequency("The quick brown fox jumps over the lazy dog."));