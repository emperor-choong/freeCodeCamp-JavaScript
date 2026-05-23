function getNumberWords(n) {
    const ones = [
        "zero", "one", "two", "three", "four", "five",
        "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    const tens = [
        "", "", "twenty", "thirty", "forty",
        "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    if (n < 20) {
        return ones[n];
    }

    const tenPart = Math.floor(n / 10);
    const onePart = n % 10;

    if (onePart === 0) {
        return tens[tenPart];
    }

    return `${tens[tenPart]}-${ones[onePart]}`;
}

// console.log(getNumberWords(0));
// console.log(getNumberWords(10));
// console.log(getNumberWords(19));
// console.log(getNumberWords(30));
// console.log(getNumberWords(53));
// console.log(getNumberWords(7));
// console.log(getNumberWords(12));
// console.log(getNumberWords(60));
// console.log(getNumberWords(67));
// console.log(getNumberWords(98));