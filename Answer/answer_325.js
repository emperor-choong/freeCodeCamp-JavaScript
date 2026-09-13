function letterDistance(str1, str2) {
    let total = 0;
    for (let i = 0; i < str1.length; i++) {
        const a = str1.charCodeAt(i) - 97; // 'a' = 0
        const b = str2.charCodeAt(i) - 97;

        const diff = Math.abs(a - b);
        total += Math.min(diff, 26 - diff);
    }

    return total;
}

// console.log(letterDistance("abc", "bcd"));
// console.log(letterDistance("abc", "xyz"));
// console.log(letterDistance("encrypt", "decrypt"));
// console.log(letterDistance("algorithm", "codeblock"));
// console.log(letterDistance("lobster", "penguin"));
// console.log(letterDistance("alligator", "crocodile"));