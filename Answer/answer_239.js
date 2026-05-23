function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {
        // Sort letters to create a key
        const key = word.split("").sort().join("");

        // Add to the correct group
        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(word);
    }

    // Return grouped anagrams
    return [...map.values()];
}

// console.log(groupAnagrams(["listen", "silent", "hello", "enlist", "world"]));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["care", "race", "acre", "pots", "stop", "tops", "opts", "post", "spot", "evil", "vile", "live", "veil"]));
// console.log(groupAnagrams(["algorithms", "logarithms", "education", "cautioned", "auctioned", "triangle", "integral", "alerting", "relating"]));