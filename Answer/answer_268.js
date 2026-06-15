function getBestHand(cards) {
    const ranks = cards.map(card => card[0]);
    const suits = cards.map(card => card[1]);

    // Count ranks
    const rankCounts = {};
    for (const rank of ranks) {
        rankCounts[rank] = (rankCounts[rank] ?? 0) + 1;
    }

    const counts = Object.values(rankCounts).sort((a, b) => b - a);

    // Check flush
    const isFlush = suits.every(suit => suit === suits[0]);

    // Check straight
    const rankValues = {
        '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9,
        'T': 10, 'J': 11, 'Q': 12,
        'K': 13, 'A': 14
    };

    let values = ranks.map(r => rankValues[r]).sort((a, b) => a - b);

    let isStraight = values.every((v, i) => i === 0 || v === values[i - 1] + 1);

    // Special case: A-2-3-4-5
    if (!isStraight) {
        const aceLow = [2, 3, 4, 5, 14];
        isStraight = values.every((v, i) => v === aceLow[i]);
    }

    // Royal Flush
    if (isFlush && ['A', 'K', 'Q', 'J', 'T'].every(r => ranks.includes(r))) {
        return "Royal Flush";
    }

    // Straight Flush
    if (isFlush && isStraight) {
        return "Straight Flush";
    }

    // Four of a Kind
    if (counts[0] === 4) {
        return "Four of a Kind";
    }

    // Full House
    if (counts[0] === 3 && counts[1] === 2) {
        return "Full House";
    }

    // Flush
    if (isFlush) {
        return "Flush";
    }

    // Straight
    if (isStraight) {
        return "Straight";
    }

    // Three of a Kind
    if (counts[0] === 3) {
        return "Three of a Kind";
    }

    // Two Pair
    if (counts[0] === 2 && counts[1] === 2) {
        return "Two Pair";
    }

    // Pair
    if (counts[0] === 2) {
        return "Pair";
    }

    return "High Card";
}

// console.log(getBestHand(["7s", "7h", "7d", "2c", "5h"]));
// console.log(getBestHand(["Ks", "Kh", "Kd", "4s", "4h"]));
// console.log(getBestHand(["2h", "5h", "7h", "9h", "Jh"]));
// console.log(getBestHand(["As", "Ah", "Ad", "Ac", "Kh"]));
// console.log(getBestHand(["Ts", "Th", "9d", "9c", "8h"]));
// console.log(getBestHand(["9c", "8c", "7c", "6c", "5c"]));
// console.log(getBestHand(["As", "Kh", "Jd", "8c", "5h"]));
// console.log(getBestHand(["As", "2h", "3d", "4c", "5h"]));
// console.log(getBestHand(["Ts", "Th", "7c", "6d", "5h"]));
// console.log(getBestHand(["As", "Ks", "Qs", "Js", "Ts"]));