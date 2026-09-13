function duplicateCharacterCount(str1, str2) {
    let count = 0;
    for(let i = 0; i < str2.length; i++){
        for(let j = 0; j < str1.length; j++){
            if(str2[i] === str1[j]){
                count++;
                break;
            }
        }
    }

    return count;
}

// console.log(duplicateCharacterCount("aloha", "hei"));
// console.log(duplicateCharacterCount("jambo", "bonjour"));
// console.log(duplicateCharacterCount("hello", "hola"));
// console.log(duplicateCharacterCount("ola", "hej"));
// console.log(duplicateCharacterCount("ciao", "konnichiwa"));
// console.log(duplicateCharacterCount("merhaba", "xin chao"));
// console.log(duplicateCharacterCount("hello world", "hello to everyone around the world"));