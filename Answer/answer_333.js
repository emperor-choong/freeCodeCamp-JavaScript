function getEmojiPhrase(str) {
    let emojiToPhrase = {
        "👶": "baby",
        "🐱": "cat",
        "🐕": "dog",
        "🐟": "fish",
        "🥵": "hot",
        "🧊": "ice",
        "🪨": "rock",
        "🦈": "shark",
        "🍲": "soup",
        "⭐": "star"
    };

    let sum = "";
    for(let emoji of str){
        sum = sum + emojiToPhrase[emoji] + " ";
    }

    return sum.trimEnd();
}

// console.log(getEmojiPhrase("🪨⭐"));
// console.log(getEmojiPhrase("🥵🐕"));
// console.log(getEmojiPhrase("👶🦈"));
// console.log(getEmojiPhrase("⭐🐟"));
// console.log(getEmojiPhrase("🧊🧊👶"));
// console.log(getEmojiPhrase("🐱🐟🍲"));