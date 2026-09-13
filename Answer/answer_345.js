function jbelmu(text) {
    let result = text.split(" ").map(element => {
        if(element.length <= 2){
            return element;
        }

        let firstLetter = element.at(0);
        let lastLetter = element.at(-1);
        let between = element.slice(1, -1);

        return firstLetter + between.split("").sort().join("") + lastLetter;
    });

    return result.join(" ");
}

// console.log(jbelmu("hello world"));
// console.log(jbelmu("i love jumbled text"));
// console.log(jbelmu("freecodecamp is my favorite place to learn to code"));
// console.log(jbelmu("the quick brown fox jumps over the lazy dog"));