function getCleanupScore(items) {
    const baseValues = {
        bottle: 10,
        can: 6,
        bag: 8,
        tire: 35,
        straw: 4,
        cardboard: 3,
        newspaper: 3,
        shoe: 12,
        electronics: 25,
        battery: 18,
        mattress: 38
    };

    let total = 0;
    let prevItem = null;
    let streak = 0;

    items.forEach((element, index) => {
        let value;

        if (Array.isArray(element)) {
            // Rare item
            value = element[1];
            prevItem = null;
            streak = 0;
        } else {
            if (element === prevItem) {
                streak++;
            } else {
                streak = 0;
            }

            value = baseValues[element] + streak;
            prevItem = element;
        }

        // Apply multiplier
        if ((index + 1) % 5 === 0) {
            value *= ((index + 1) / 5 + 1);
        }

        total += value;
    });

    return total;
}

// console.log(getCleanupScore(["bottle", "straw", "shoe", "battery"]));
// console.log(getCleanupScore(["electronics", "straw", "newspaper", "bottle", "bag"]));
// console.log(getCleanupScore(["shoe", "can", "can", "can", "bottle", "bottle", "straw", "straw", "straw"]));
// console.log(getCleanupScore(["mattress", ["rare", 80], "tire", "tire", "tire", ["rare", 95]]));
// console.log(getCleanupScore(["bottle", "can", "can", "shoe", "shoe", ["rare", 56], "bottle", "bottle", "can", "can", "electronics", "bottle", ["rare", 48], "bottle", "can", "can", "can", "can", "can", "can", "can"]));