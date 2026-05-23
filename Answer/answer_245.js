function getLongestSubstring(str) {
    for (let len = str.length - 1; len > 0; len--) {
        const seen = new Set();

        for (let i = 0; i <= str.length - len; i++) {
            const sub = str.slice(i, i + len);

            if (seen.has(sub)) {
                return sub; 
            }

            seen.add(sub);
        }
    }
}

// console.log(getLongestSubstring("abracadabra"));
// console.log(getLongestSubstring("hello world hello"));
// console.log(getLongestSubstring("mississippi"));
// console.log(getLongestSubstring("ha ha ha ha ha ha ha"));
// console.log(getLongestSubstring("the quick brown fox jumped over the lazy dog that the quick brown fox jumped over"));