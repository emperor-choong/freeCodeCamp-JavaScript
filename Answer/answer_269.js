function getCombinations(n) {
    let result = 1;
    // Catalan number
    for (let i = 0; i < n; i++) {
        result = result * (2 * n - i) / (i + 1);
    }

    return result / (n + 1);
}

// console.log(getCombinations(2));
// console.log(getCombinations(3));
// console.log(getCombinations(5));
// console.log(getCombinations(8));
// console.log(getCombinations(13));