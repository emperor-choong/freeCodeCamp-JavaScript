function getUniqueClimbs(steps) {
    if (steps <= 2){
        return steps;
    } 

    // Dynamic Programming
    const dp = [0, 1, 2];

    for (let i = 3; i <= steps; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[steps];
}

// console.log(getUniqueClimbs(4));
// console.log(getUniqueClimbs(5));
// console.log(getUniqueClimbs(10));
// console.log(getUniqueClimbs(18));
// console.log(getUniqueClimbs(29));
// console.log(getUniqueClimbs(50));
