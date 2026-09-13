function fiveDice(dice) {
    // Count occurrences of each die value
    const counts = {};

    for (const die of dice) {
        counts[die] = (counts[die] || 0) + 1;
    }

    // Get frequencies and sort descending
    const freq = Object.values(counts).sort((a, b) => b - a);

    // Sort dice for straight checks
    const sorted = [...dice].sort((a, b) => a - b);

    const isLargeStraight =
        sorted.join(",") === "1,2,3,4,5" ||
        sorted.join(",") === "2,3,4,5,6";

    const unique = [...new Set(sorted)];

    const isSmallStraight =
        unique.join(",").includes("1,2,3,4") ||
        unique.join(",").includes("2,3,4,5") ||
        unique.join(",").includes("3,4,5,6");

    // Check hands from highest to lowest
    if (freq[0] === 5) return "five of a kind";
    if (freq[0] === 4) return "four of a kind";
    if (freq[0] === 3 && freq[1] === 2) return "full house";
    if (isLargeStraight) return "large straight";
    if (isSmallStraight) return "small straight";
    if (freq[0] === 3) return "three of a kind";
    if (freq[0] === 2 && freq[1] === 2) return "two pair";
    if (freq[0] === 2) return "pair";

    return "no pair";
}

// console.log(fiveDice([1, 1, 1, 1, 1]));
// console.log(fiveDice([5, 5, 5, 6, 5]));
// console.log(fiveDice([2, 5, 6, 4, 3]));
// console.log(fiveDice([4, 3, 3, 3, 1]));
// console.log(fiveDice([4, 6, 2, 6, 5]));
// console.log(fiveDice([1, 4, 5, 6, 2]));
// console.log(fiveDice([1, 3, 4, 6, 2]));
// console.log(fiveDice([2, 2, 5, 2, 5]));
// console.log(fiveDice([6, 4, 5, 6, 4]));