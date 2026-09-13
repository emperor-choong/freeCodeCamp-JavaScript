function getOdds(dice, target) {
    // dp[i][j] = ways to get sum j using i dice
    const dp = Array.from({ length: dice + 1 }, () =>
        Array(target + 1).fill(0)
    );

    // Base case
    dp[0][0] = 1;

    for (let d = 1; d <= dice; d++) {
        for (let sum = 1; sum <= target; sum++) {
            for (let face = 1; face <= 6; face++) {
                if (sum >= face) {
                    dp[d][sum] += dp[d - 1][sum - face];
                }
            }
        }
    }

    const successful = dp[dice][target];
    const total = Math.pow(6, dice);

    const x = Math.round(total / successful);

    return `1 in ${x}`;
}

// console.log(getOdds(1, 5));
// console.log(getOdds(2, 4));
// console.log(getOdds(3, 10));
// console.log(getOdds(4, 7));
// console.log(getOdds(5, 26));
// console.log(getOdds(6, 35));