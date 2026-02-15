function mirror(str) {
    let reverseStr = str.split("").reverse().join("");
    let result = str + reverseStr;
    return result;
}

// console.log(mirror("freeCodeCamp"));
// console.log(mirror("RaceCar"));
// console.log(mirror("helloworld"));
// console.log(mirror("The quick brown fox..."));