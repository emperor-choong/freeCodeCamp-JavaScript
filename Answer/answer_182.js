function smallestGap(str) {
    const lastSeen = new Map();
    let minGap = Infinity;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (lastSeen.has(char)) {
            const prevIndex = lastSeen.get(char);
            const gap = i - prevIndex - 1;

            if (gap < minGap) {
                minGap = gap;
                result = str.slice(prevIndex + 1, i);
            }
        }

        lastSeen.set(char, i);
    }

    return result;
}

console.log(smallestGap("ABCDAC"));
console.log(smallestGap("racecar"));
console.log(smallestGap("A{5e^SD*F4i!o#q6e&rkf(po8|we9+kr-2!3}=4"));
console.log(smallestGap("Hello World"));
console.log(smallestGap("The quick brown fox jumps over the lazy dog."));