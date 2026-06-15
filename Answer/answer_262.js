function fixNumerals(str) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // Step 1: Convert malformed numeral to total value
    let total = 0;

    for (const char of str) {
        total += values[char];
    }

    // Step 2: Convert number back to standard Roman numeral
    const romanMap = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    for (const [value, symbol] of romanMap) {
        while (total >= value) {
            result += symbol;
            total -= value;
        }
    }

    return result;
}

// console.log(fixNumerals("XIIIII"));
// console.log(fixNumerals("IIIILX"));
// console.log(fixNumerals("XXVVVIIIII"));
// console.log(fixNumerals("MDCCLXXXXVIIII"));
// console.log(fixNumerals("IIIIVVVVXXXXLLLLCCDD"));
// console.log(fixNumerals("ILCDMIVDIIXLCVCXDL"));