function isValidNumber(n, base) {
    let digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let validDigits = digits.slice(0, base);
    let regex = new RegExp(`^[${validDigits}]+$`, "i");

    return regex.test(n);
}

// console.log(isValidNumber("10101", 2));
// console.log(isValidNumber("10201", 2));
// console.log(isValidNumber("76543210", 8));
// console.log(isValidNumber("9876543210", 8));
// console.log(isValidNumber("9876543210", 10));
// console.log(isValidNumber("ABC", 10));
// console.log(isValidNumber("ABC", 16));
// console.log(isValidNumber("Z", 36));
// console.log(isValidNumber("ABC", 20));
// console.log(isValidNumber("4B4BA9", 16));
// console.log(isValidNumber("5G3F8F", 16));
// console.log(isValidNumber("5G3F8F", 17));
// console.log(isValidNumber("abc", 10));
// console.log(isValidNumber("abc", 16));
// console.log(isValidNumber("AbC", 16));
// console.log(isValidNumber("z", 36));