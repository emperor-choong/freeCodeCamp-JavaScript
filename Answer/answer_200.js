function hasNoRepeats(str) {
    let regex = /(.)\1+/;
    return !regex.test(str);
}

// console.log(hasNoRepeats("hi world"));
// console.log(hasNoRepeats("hello world"));
// console.log(hasNoRepeats("abcdefghijklmnopqrstuvwxyz"));
// console.log(hasNoRepeats("freeCodeCamp"));
// console.log(hasNoRepeats("The quick brown fox jumped over the lazy dog."));
// console.log(hasNoRepeats("Mississippi"));