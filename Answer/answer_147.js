function separateLettersAndNumbers(str) {
    return str.match(/[A-Za-z]+|[0-9]+/g).join('-');
}

// console.log(separateLettersAndNumbers("ABC123"));
// console.log(separateLettersAndNumbers("Route66"));
// console.log(separateLettersAndNumbers("H3LL0W0RLD"));
// console.log(separateLettersAndNumbers("a1b2c3d4"));