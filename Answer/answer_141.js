function isValidHex(str) {
    let regex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

    return regex.test(str);
}

// console.log(isValidHex("#123"));
// console.log(isValidHex("#123abc"));
// console.log(isValidHex("#ABCDEF"));
// console.log(isValidHex("#0a1B2c"));
// console.log(isValidHex("#12G"));
// console.log(isValidHex("#1234567"));
// console.log(isValidHex("#12 3"));
// console.log(isValidHex("fff"));