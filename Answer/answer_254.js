function getLongestChain(dominoes) {
    let bestChain = [];

    function backtrack(remaining, chain) {
        // Save longest chain found so far
        if (chain.length > bestChain.length) {
            bestChain = [...chain];
        }

        // Try every remaining domino
        for (let i = 0; i < remaining.length; i++) {
            const [a, b] = remaining[i];

            // If chain is empty, any domino can start
            if (chain.length === 0) {
                const nextRemaining = remaining.filter((_, idx) => idx !== i);

                // Normal orientation
                backtrack(nextRemaining, [...chain, [a, b]]);

                // Flipped orientation
                if (a !== b) {
                    backtrack(nextRemaining, [...chain, [b, a]]);
                }
            } else {
                const last = chain[chain.length - 1][1];

                // Match without flip
                if (a === last) {
                    const nextRemaining = remaining.filter((_, idx) => idx !== i);

                    backtrack(nextRemaining, [...chain, [a, b]]);
                }

                // Match with flip
                if (b === last) {
                    const nextRemaining = remaining.filter((_, idx) => idx !== i);

                    backtrack(nextRemaining, [...chain, [b, a]]);
                }
            }
        }
    }

    backtrack(dominoes, []);

    return bestChain;
}

// console.log(getLongestChain([[1, 2], [4, 5], [2, 3]]));
// console.log(getLongestChain([[2, 1], [4, 3], [5, 3]]));
// console.log(getLongestChain([[1, 2], [3, 4], [2, 3], [4, 0]]));
// console.log(getLongestChain([[6, 6], [6, 1], [1, 1], [0, 3], [2, 3], [4, 1], [5, 6]]));
// console.log(getLongestChain([[0, 4], [3, 3], [0, 3], [5, 6], [4, 5], [4, 2], [5, 5], [1, 2], [4, 4]]));