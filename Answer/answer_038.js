function count(text, pattern) {
    let counter = 0;
    for(let i = 0; i <= text.length-pattern.length; i++){
        if(text.slice(i, i+pattern.length) === pattern){
            counter++;
        }
    }

    return counter;
}

// console.log(count('abcdefg', 'def'));
// console.log(count('hello', 'world'));
// console.log(count('mississippi', 'iss'));
// console.log(count('she sells seashells by the seashore', 'sh'));
// console.log(count('101010101010101010101', '101'));