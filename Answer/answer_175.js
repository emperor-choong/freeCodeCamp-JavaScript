function countLettersAndNumbers(str) {
    // Nullish coalescing operator (??)
    let letter = str.match(/[A-Za-z]/g) ?? [];
    let number = str.match(/[0-9]/g) ?? [];

    let x = letter.length;
    let y = number.length;

    if(x === 1 && y === 1){
        return `The string has ${x} letter and ${y} number.`;
    }else if(x === 1){
        return `The string has ${x} letter and ${y} numbers.`;
    }else if(y === 1){
        return `The string has ${x} letters and ${y} number.`;
    }else{
        return `The string has ${x} letters and ${y} numbers.`;
    }
}

// console.log(countLettersAndNumbers("helloworld123"));
// console.log(countLettersAndNumbers("Catch 22"));
// console.log(countLettersAndNumbers("A1!"));
// console.log(countLettersAndNumbers("12345"));
// console.log(countLettersAndNumbers("password"));

